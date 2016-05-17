import React from 'react'
import { signup } from '../styles.css'
import img from '../images/coder9.jpg'

export default class Signup extends React.Component {
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
          <div className= {signup} >
            <div className="col s12 m8 push-m8">
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
                    <input name="title" type="radio" className="green" id="user" />
                    <label for="user">Student</label>
                  </p>
                  <p>
                    <input name="title" type="radio" id="student" />
                    <label for="student">Tutor</label>
                  </p>
              </form>    
              <a className="waves-effect waves-green btn green" a href="/dashboard">Sign Up</a>
                <p className="login">Already have a profile? <a href="/signin" className="green-text">Sign In.</a></p>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
