import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatContainer from '../containers/ChatContainer'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const token = this.props.auth.token
    const id = this.props.auth.id
    return (
      <div>
        <h2>This is the dashboard!</h2>
        <div>
          <ChatContainer />
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
