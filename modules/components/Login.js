import React from 'react'
import { login } from './actions'
import { connect } from 'react-redux'
import { Button, Icon } from 'react-materialize'
import { smallIcon, green50 } from '../styles.css'

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
        <div className="row">
  				<form className="col s12" onSubmit={this.logIn}>
            <div className="row">
    					<div className="input-field col s4 pull-s2">
    						<i className={`${smallIcon} ${green50} material-icons prefix`}>account_circle</i>
                <input ref="email" type="email" placeholder="Email" />
    					</div>
    					<div className="input-field col s4 pull-s1">
                <i className={`${smallIcon} ${green50} material-icons prefix`}>vpn_key</i>
    						<input ref="password" type="password" placeholder="Password" />
    					</div>
    					<button className="waves-effect waves-green btn green">Log in</button>
    				</div> 
          </form>
        </div>
  		</div>
   	) 
  }
}

const mapStateToProps = (state) => {
	return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(Login)
