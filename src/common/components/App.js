import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { checkAuth, signOut, loggedIn } from '../actions/authActions'
import { Navbar, NavItem } from 'react-materialize'
import Signup from './Signup'
import Login from './Login'
import cookie from 'react-cookie'

class App extends Component {
  constructor(props) {
    super(props)
  }

  handleSignOut() {
    const { dispatch } = this.props
    dispatch(authActions.signOut())
  }

  // componentWillMount() {
  //   if ( sessionStorage && sessionStorage.token && !this.props.auth)
  //     this.props.dispatch(loggedIn(sessionStorage.userId, sessionStorage.token))
  // }

  // <NavItem><Link className={"white-text accent-3"} to={this.handleSignOut}>Sign Out</Link></NavItem>
  // <NavItem><Link className={"white-text accent-3"} to="/login">Login</Link></NavItem>
                

  render() {
    let link = cookie.load('username') ? (<Link className={"white-text accent-3"} to={this.handleSignOut}>Sign Out</Link>) : (    <Link className={"white-text accent-3"} to="/login">Login</Link>)
    return (

      <div>
        <div className="navbar-fixed">
          <nav>
            <div className={"black nav-wrapper"}>
              <a href="#" className="brand-logo white-text accent-3">Uber Tutor</a>
              <ul id="nav-mobile" className={"right hide-on-med-and-down"}>
                {link}
                <NavItem><Link className={"white-text accent-3"} to="/tutor">Find a Tutor</Link></NavItem>
                <NavItem><Link className={"white-text accent-3"} to="/help">Help</Link></NavItem>
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

