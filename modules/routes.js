import '../modules/styles.css'
import React from 'react'
import { Route } from 'react-router'
import { ServerRoute } from 'react-project'
import App from './components/App'
import NoMatch from './components/NoMatch'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import { signUp, signIn } from './api/auth'
import { createTodo, getTodos } from './api/todos'
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
      <Route path="login" component={Login} />
      <Route path="about" component={About} />
      <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path="signup" post={signUp} />
      <ServerRoute path="signin" post={signIn} />
      <ServerRoute path="todos" post={createTodo} get={getTodos} />
    </ServerRoute>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
