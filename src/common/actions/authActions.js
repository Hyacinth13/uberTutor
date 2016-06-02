import $ from 'jquery'
import * as types from '../constants/ActionTypes'
import { browserHistory } from 'react-router'
import fetch from 'isomorphic-fetch'
import cookie from 'react-cookie'

export const login = (email, pass, redirect, history) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/sign_in',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, password: pass })
    }).done( res => {
      cookie.save('username', res.username)
          dispatch(receiveSignIn(res.username))
          browserHistory.push('/dashboard')
    }).fail( res => {
      sessionStorage.clear()
      dispatch(logout())
    })
  }
}

export const signUp = (email, pass, displayName, phoneNumber, redirect, history, userType) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/sign_up',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, password: pass, displayName: displayName, 
        phoneNumber: phoneNumber, userType: userType })
    }).done( res => {
      cookie.save('username', res.username)
      dispatch(receiveUser(res.username))
      browserHistory.push('/dashboard')
    }).fail( res => {
      dispatch(logout())
    })
  }
}

const getToken = () => {
  return Math.random().toString(36).substring(7)
}

export const logout = () => {
  return {
    type: 'USER_LOGGED_OUT'
  }
}

export const loggedIn = (id, token) => {
  return {
    type: 'USER_LOGGED_IN',
    id,
    token
  }
}

export function receiveSocket(socketID) {
  return {
    type: types.RECEIVE_SOCKET,
    socketID
  }
}

export function receiveAuth() {
  const user = cookie.load('username')
  return {
    type: types.AUTH_LOAD_SUCCESS,
    user
  }
}

export function checkAuth() {
  if (cookie.load('username')) {
    return true
  }
  return false
}

function requestSignUp() {
  return {
    type: types.AUTH_SIGNUP
  }
}

function receiveUser(username) {
  const newUser = {
    name: username,
    id: Symbol(username)
  }
  return {
    type: types.AUTH_SIGNUP_SUCCESS,
    newUser
  }
}

function requestSignOut() {
  return {
    type: types.AUTH_SIGNOUT
  }
}
function receiveSignOut() {
  return {
    type: types.AUTH_SIGNOUT_SUCCESS
  }
}

export function signOut() {
  return dispatch => {
    dispatch(requestSignOut())
    return fetch('/api/signout')
      .then(response => {
        if(response.ok) {
          cookie.remove('username')
          dispatch(receiveSignOut())
          browserHistory.push('/')
        }
      })
      .catch(error => {throw error})
  }
}

function requestSignIn() {
  return {
    type: types.AUTH_SIGNIN
  }
}

export function receiveSignIn(username) {
  const user = {
    name: username,
    id: Symbol(username)
  }
  return {
    type: types.AUTH_SIGNIN_SUCCESS,
    user
  }
}
