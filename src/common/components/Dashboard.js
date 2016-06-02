import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatContainer from '../containers/ChatContainer'
import { Link } from 'react-router'
import { checkAuth, signOut, loggedIn, receiveSignIn } from '../actions/authActions'
import { Navbar, NavItem } from 'react-materialize'
import Signup from './Signup'
import Login from './Login'
import cookie from 'react-cookie'
import Channels from './Channels'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    if (!this.props.user || this.props.user.id === 0) {
      let userName = cookie.load('username')
      this.props.dispatch(receiveSignIn(userName))
    }
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className={"black nav-wrapper"}>
              <a href="#" className="brand-logo white-text accent-3">Super Tutor</a>
              <a href="/Login" data-activates="mobile-demo" className='mobilelog button-collapse waves-effect btn green'>Log In</a>
            </div>
          </nav>
        </div>
        <h3>Welcome, our tutors are ready to assist you!</h3>
        <div>
          <div>
            <ChatContainer {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    auth: { token: state.auth.token, id: state.auth.id }
  }
}

export default connect(mapStateToProps)(Dashboard)
