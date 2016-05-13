import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'
import { Navbar, NavItem } from 'react-materialize'
import Signup from './Signup'
import Login from './Login'

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
              <ul id="nav-mobile" className={"right hide-on-med-and-down"}>
                <NavItem><Link className={"white-text accent-3"} to="/login">Login</Link></NavItem>
                <NavItem><Link className={"white-text accent-3"} to="/tutor">Find a Tutor</Link></NavItem>
                <NavItem><Link className={"white-text accent-3"} to="/help">Help</Link></NavItem>
              </ul>
            </div>
          </nav>
        </div>
              <div>
                <Signup />
              </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)

