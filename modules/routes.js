import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ServerRoute } from 'react-project'
import App from './components/App'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import { signUp, signIn } from './api/auth'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { push } from 'react-router-redux'

const UserIsAuthenticated = UserAuthWrapper({
 authSelector: state => state.auth,
 predicate: auth => auth.isAuthenticated,
 redirectAction: push,
 wrapperDisplayName: 'UserIsAuthenticated'
})


export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Signup} />
      <Route path="login" component={Login} />
      <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path="signup" post={signUp} />
      <ServerRoute path="signin" post={signIn} />
    </ServerRoute>
  </Route>
)
