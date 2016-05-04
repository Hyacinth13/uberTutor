import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import { logOut, loggedIn } from './actions'


class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  constructor(props) {
  super(props)
}

componentWillMount() {
  if (sessionStorage.token && !this.props.auth)
    this.props.dispatch(loggedIn(sessionStorage.userId, sessionStorage.token))
}
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.auth ? (
              <a href="#"
                onClick { e =>
                  {
                    e.preventDefault
                    this.props.dispatch(logOut())
                    this.props.history.push('/login')
                  }
                }
              >
              Logout
              </a>
            ): (<Link to="/login">Sign In</Link>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)

