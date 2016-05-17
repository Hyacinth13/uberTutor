import React from 'react'
import { connect } from 'react-redux'

export default class Dashboard extends React.createClass {
  render() {
    return (
      <div>
      <h2>This is the dashboard!</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(Dashboard)
