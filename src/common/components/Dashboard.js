import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatContainer from '../containers/ChatContainer'
import Chat from './Chat'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <div>
          <ChatContainer/>
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
