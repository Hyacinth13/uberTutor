import React from 'react'
import { connect } from 'react-redux'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const token = this.props.auth.token
    const id = this.props.auth.id
    return (
      <div>
        <h2>This is the dashboard!</h2>
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
