import React, { Component } from 'react'
import { signUp } from '../actions/authActions'
import { connect } from 'react-redux'
import { Button, Icon } from 'react-materialize'

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
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <h4 className="black-text center-align">Connect with tutors anywhere.</h4>
              <br />
            </div>
            <div className='col s12 m5 push-m1' >
              <div>
                <div className="card-panel">
                <form onSubmit={this.signUp}>
                  <h4 className="center">Sign up today!</h4>
                  <div className="input-field"> 
                    <i className='material-icons prefix green50'>account_circle</i>
                    <input ref="displayName" type="text" className="active validate" placeholder="Display Name " />
                  </div>
                  <div className="input-field">
                    <i className='material-icons prefix green50'>vpn_key</i>
                    <input ref="password" type="password" placeholder="Password" />
                  </div>
                  <div className="input-field">
                    <i className='material-icons prefix green50'>email</i>
                    <input ref="email" type="email" className="validate" placeholder="Email" />
                  </div>
                  <div className="input-field">
                    <i className='material-icons prefix green50'>phone</i>
                    <input ref="phoneNumber" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" required className="validate" placeholder="Mobile Number (XXX-XXX-XXXX)"/>
                  </div>
                  <p>I am a:</p>
                  <select className="browser-default" onChange={ this.change } >
                    <option value="student">Student</option>
                    <option value="tutor">Tutor</option>
                  </select>
                  <br />   
                  <button className="waves-effect waves-green btn green" type="submit" name="action">Sign Up
                    <i className="material-icons right">send</i>
                  </button>
                </form> 
                </div>
              </div>
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
