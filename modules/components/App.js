import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'
import { Navbar, NavItem } from 'react-materialize'

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
      <Title render="Uber Tutor"/>
        <Navbar brand="Uber Tutor" left>
          <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
        </Navbar>  
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)

