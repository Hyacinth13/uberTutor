import React from 'react'
import { signup } from '../styles.css'

export default class Signup extends React.Component {
  render() {
    return(
    <div>
      <div className="container">
        <div className="row">
          <div className= {signup} >
            <div className="col s12 m10">
            <form>
            <div className="input-field"> 
              <input id="first_name" type="text" className="validate" />
              <label className="active row" for="first_name">First Name</label>
            </div>
            <div className="input-field">
              <input id="last_name" type="text" className="validate" />
              <label className="active row" for="last_name">Last Name</label>
            </div>
            <div className="input-field">
              <input id="username" type="text" className="validate" />
              <label className="active row" for="username">Username</label>
            </div>
            <div className="input-field">
              <input id="password" type="password" className="validate" />
              <label className="active row" for="password">Password</label>
            </div>
            <div className="input-field">
              <input id="email" type="email" className="validate" />
              <label className="active row" for="email">Email</label>
            </div>
            <div className="input-field">
              <input id="phone" type="text" className="validate" />
              <label className="active row" for="phone">Phone Number</label>
            </div>
              <form action="#">
                <p>I am a:
                  <br />
                    <input name="profession" type="radio" id="user" />
                    <label for="user">User</label>
                  </p>
                  <p>
                    <input name="profession" type="radio" id="student" />
                    <label for="student">Student</label>
                  </p>
              </form>    
              <a className="waves-effect waves-light btn" a href="/dashboard">Sign Up</a>
                <p className="login">Already have a profile? <a href="/signin">Sign In.</a></p>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}