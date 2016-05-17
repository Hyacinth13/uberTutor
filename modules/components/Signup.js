import React from 'react'
import { signup } from '../styles.css'
import { signUp } from './actions'
import { connect } from 'react-redux'


export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.signUp = this.signUp.bind(this)
    const redirectLocation = '/dashboard'
    this.change = this.change.bind(this)
    this.state = { error: false, redirectRoute: redirectLocation, userType: 'student' }

  }

  change(e) {
    const type = e.target.value
    this.setState ({ usertype: type })
  }

  signUp(e) {
  e.preventDefault()
  const email = this.refs.email.value
  const displayName = this.refs.displayName.value
  const password = this.refs.password.value
  const phoneNumber = this.refs.phoneNumber.value
  const userType = this.state.userType.value

  this.props.dispatch(signUp(email, displayName, password, phoneNumber))
}

  render() {
    return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <h3>Tutor with Uber Tutor</h3>
            <br />
            <p> Earn money on your schedule </p>
            <img src={img} />
          </div>
          <div className={signup} >
            <div className="col s12 m10 push-m10">
            <form onSubmit={signUp}>
              <div className="input-field"> 
                <input ref="displayName" type="text" placeholder="Display Name " />
              </div>
              <div className="input-field">
                <input ref="password" type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <input ref="email" type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <input ref="phoneNumber" type="tel" placeholder="Mobile Number" />
              </div>
              <p>I am a:</p>
              <select className="browser-default" onChange={ this.change } >
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
              </select>
              <br />   
              <a className="waves-effect waves-green btn green" a href="/dashboard">Sign Up</a>
              <p className="login">Already have a profile? <a href="/login" className="green-text">Sign In.</a></p>
            </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(Signup)
