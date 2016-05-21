import React from 'react'
import { Redirect, Router, Route, IndexRoute } from 'react-router'
import App from './components/App'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ChatContainer from './containers/ChatContainer';
import Signup from './components/Signup'
import { signUp, signIn } from './actions/authActions'
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
      <Route path="signup" component={Signup} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="chat" component={ChatContainer} />
    </Route>
  </Route>
)
