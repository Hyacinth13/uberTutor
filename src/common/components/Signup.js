import React, { Component } from 'react'
//import { signup } from '../css/styles.css'
import { signUp } from '../actions/authActions'
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
  this.props.dispatch(signUp(email, password, displayName, phoneNumber, '/dashboard', this.props.history, userType))
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
           <img src='data:image/jpeg;base64,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' />
          </div>
          <div className="signup" >
            <div className="col s12 m10 push-m10">
            <form onSubmit={this.signUp}>
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
              <button className="waves-effect waves-green btn green">Sign Up</button>
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