import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'
import { Navbar, NavItem } from 'react-materialize'
import Signup from './Signup'
import Login from './Login'
import { Button, Icon } from 'react-materialize'
import { mobilelog } from '../styles.css'

class App extends React.Component {
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
        <div className="navbar-fixed">
          <nav>
            <div className={"black nav-wrapper"}>
              <a href="#" className="brand-logo white-text accent-3">Uber Tutor</a>
              <a href="/Login" data-activates="mobile-demo" className={`${mobilelog} button-collapse waves-effect btn green`}>Log In</a>
              <ul id="nav-mobile" className={"right hide-on-med-and-down"}>
                <Login />
              </ul>
            </div>
          </nav>
        </div>
      {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)

