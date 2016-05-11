import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
    <div>
      <div class="container">
          <div class="row">
            <div class="card-panel">
                 <form>
                 <div class="input-field">
                  <input id="username" type="text" class="validate" />
                  <label class="active row" for="username">Username</label>
              </div>
              <div class="input-field">
                <input id="password" type="password" class="validate" />
                <label class="active row" for="password">Password</label>
              </div>
                  <a class="waves-effect waves-light btn" a href="/dashboard">Sign In</a>
                     <p class="login">Don't have a login? <a href="/signup">Sign Up</a></p>
                  </form> 
            </div>
          </div>
      </div>
    </div>
   ) 
  }
}
