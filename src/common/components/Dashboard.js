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
        <h2>Welcome</h2>
        <div>
          <div className="container">
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
