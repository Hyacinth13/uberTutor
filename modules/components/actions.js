import $ from 'jquery'
import { push } from 'react-router-redux'

export const login = (email, pass, redirect, history) => {
	return(dispatch) => {
		$.ajax({
			url: '/api/login', 
			type: 'POST',
			contentType:'application/json',
			data: JSON.stringify({ email: email, password: pass })
		}).done(res => {
			const token = getToken()
			sessionStorage.token = token
			session.userId = res.id
			dispatch(loggedIn(res.id, token))
			history.push(redirect)
		}).fail( res => {
			sessionStorage.clear()
			dispatch(logout())
		})
	}
} 

export const signup = (email, pass, redirect, history) => {
	return(dispatch) => {
		$.ajax({
			url: '/api/login', 
			type: 'POST',
			contentType:'application/json',
			data: JSON.stringify({ email: email, password: pass })
		}).done(res => {
			const token = getToken()
			sessionStorage.token = token
			session.userId = res.id
			dispatch(loggedIn(res.id, token))
			history.push(redirect)
		}).fail( res => {
			sessionStorage.clear()
			dispatch(logout())
		})
	}
} 

export const logout = () => {
	return{
		type: 'USER_LOGGED_OUT'
	}
}

export const loggedIn = (id, token) => {
	return{
		type: "USER_LOGGED_IN"
	}
}

const getToken = () => {
  return Math.random().toString(36).substring(7)
}
