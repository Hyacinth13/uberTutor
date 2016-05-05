import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'

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
        <ul>
          <li>
           {this.props.auth ? (
             <a href="#"
               onClick={ e => {
                 {
                   e.preventDefault()
                   this.props.dispatch(logout())
                   this.props.history.push('/login')
                 }
               }}
             >
              Log out
             </a>
           ) : (<Link to="/login">Sign In</Link>)}
           </li>
           <li><Link to="/dashboard">Dashboard</Link></li>
           <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)

