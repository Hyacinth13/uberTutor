import React, { Component } from 'react'
import { login, } from '../actions/authActions'
import { connect } from 'react-redux'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.logIn = this.logIn.bind(this)
		const redirectLocation = '/dashboard'
		this.state = { error: false, redirectRoute: redirectLocation }
	}

	logIn(event) {
		event.preventDefault()
		const email = this.refs.email.value
		const password = this.refs.password.value
		this.props.dispatch(login(email, password, this.state.redirectRoute, this.props.history))
	}

	render() {
  	return (
  		<div>
  			<div className="container">
  				<div className="row">
  					<div className="card-panel">
  						<form onSubmit={this.logIn}>
  							<div className="input-field">
  								<input ref="email" placeholder="Email" />
  							</div>
  							<div className="input-field">
  								<input ref="password" type="password" placeholder="Password" />
  							</div>
  							<button className="waves-effect waves-light btn">Sign In</button>
  							<p className="login">Don't have a login?<a href="/signup">Sign Up</a></p>
  						</form> 
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

export default connect(mapStateToProps, null)(Login)
