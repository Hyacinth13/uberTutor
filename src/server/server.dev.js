import express from 'express'
import path from 'path'
import morgan from 'morgan'

import mongoose from 'mongoose'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import React from 'react'
import configureStore from '../common/store/configureStore'
import { RouterContext, match } from 'react-router'
import routes from '../common/routes'
import {createLocation} from 'history'
import DevTools from '../common/containers/DevTools'
import cors from 'cors'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config.dev'
const compiler = webpack(webpackConfig)
import User from './models/user.js'
import passport from 'passport'
require('../../config/passport')(passport)
import SocketIo from 'socket.io'
const app = express()
app.use(morgan('combined'))
//set env vars
process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/chat_dev'
process.env.PORT = process.env.PORT || 3000

// connect our DB
mongoose.connect(process.env.MONGOLAB_URI)

process.on('uncaughtException', function (err) {
  console.log(err)
})
app.use(cors())
app.use(passport.initialize())

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

//load routers
const messageRouter = express.Router()
const usersRouter = express.Router()
const channelRouter = express.Router()
require('./routes/message_routes')(messageRouter)
require('./routes/channel_routes')(channelRouter)
require('./routes/user_routes')(usersRouter, passport)
app.use('/api', messageRouter)
app.use('/api', usersRouter)
app.use('/api', channelRouter)

app.use('/', express.static(path.join(__dirname, '..', 'static')))

app.get('/*', function(req, res) {
  const location = createLocation(req.url)
  match({ routes, location }, (err, redirectLocation, renderProps) => {

    const initialState = {
      auth: {
        user: {
          username: User.displayName,
          id: 0,
          socketID: null
        }
      }
    }
    const store = configureStore(initialState)
    // console.log(redirectLocation)
    // if(redirectLocation) {
    //   return res.status(302).end(redirectLocation)
    // }


    if(err) {
      console.error(err)
      return res.status(500).end('Internal server error')
    }

    if(!renderProps) {
      return res.status(404).end('Not found')
    }
    const InitialView = (
      <Provider className="root" store={store}>
        <div style={{height: '100%'}}>
          <RouterContext {...renderProps} />
          {process.env.NODE_ENV !== 'production' && <DevTools />}
        </div>
      </Provider>
    )

    const finalState = store.getState()
    const html = renderToString(InitialView)
    res.status(200).end(renderFullPage(html, finalState))
  })
})

const server = app.listen(process.env.PORT, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('server listening on port: %s', process.env.PORT)
})

const io = new SocketIo(server, {path: '/api/chat'})
const socketEvents = require('./socketEvents')(io)

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500" rel="stylesheet" type="text/css" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <title>Super Tutor</title>
      </head>
      <body>
        <container id="react">${html}</container>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}
