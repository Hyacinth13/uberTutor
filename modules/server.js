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

// var express = require('express'),
//   app = express(),
//   http = require('http').Server(app),
//   io = require('socket.io')(http);

// // define routes
// app.use('/', express.static(__dirname + '/public'));
// app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// // server events
// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('a user disconnected');
//   })
//   socket.on('messageAdded', function(message) {
//     // io.emit('messageAdded', message); // broadcast to all clients
//     socket.broadcast.emit('messageAdded', message); // broadcast to all but the sender
//   })
// })

const server = createServer(getApp)

server.use( session({ secret: 'secret', resave: false, saveUnitialized: false }))
server.use(passport.initialize())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect('mongodb://localhost/auth-3')

server.start()

