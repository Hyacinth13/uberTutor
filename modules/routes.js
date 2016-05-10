import '../modules/styles.css'
import React from 'react'
import { Route } from 'react-router'
import { ServerRoute } from 'react-project'
import App from './components/App'
import Login from './components/Login'
//import { signUp, signIn } from './api/auth'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { push } from 'react-router-redux'

//const UserIsAuthenticated = UserAuthWrapper({
//  authSelector: state => state.auth,
//  predicate: auth => auth.isAuthenticated,
//  redirectAction: push,
//  wrapperDisplayName: 'UserIsAuthenticated'
//})

export default (
  <Route>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
    </Route>
    <ServerRoute path="/api">
    </ServerRoute>
  </Route>
)
