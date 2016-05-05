import React from 'react'
import { createServer } from 'react-project/server'
import { RouterContext } from 'react-router'
import Document from '../modules/components/Document'
import routes from '../modules/routes'

import mongoose from 'mongoose'
import passport from 'passport'
import local from 'passport-local'
import session from 'express-session'
import User from './models/user'
let LocalStrategy = local.Strategy

function getApp(req, res, requestCallback) {
  requestCallback(null, {
    routes: routes,
    render(routerProps, renderCallback) {
      renderCallback(null, {
        renderDocument: (props) => <Document {...props}/>,
        renderApp: (props) => <RouterContext {...props}/>
      })
    }
  })
}

const server = createServer(getApp)

server.use( session({ secret: 'secret', resave: false, saveUnitialized: false }))
server.use(passport.initialize())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect('mongodb://localhost/auth-3')

server.start()

