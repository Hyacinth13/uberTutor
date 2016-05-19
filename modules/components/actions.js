import $ from 'jquery'

export const login = (email, pass, redirect, history) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/signin',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, password: pass })
    }).done( res => {
      debugger
      const token = getToken()
      sessionStorage.token = token
      sessionStorage.userId = res.id
      dispatch(loggedIn(res.id, token))
      history.push(redirect)
    }).fail( res => {
      debugger
      sessionStorage.clear()
      dispatch(logout())
    })
  }
}

export const signUp = (email, pass, displayName, phoneNumber, redirect, history, userType) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, password: pass, displayName: displayName, 
        phoneNumber: phoneNumber, userType: userType })
    }).done( res => {
      const token = getToken()
      sessionStorage.token = token
      sessionStorage.userId = res.id
      dispatch(loggedIn(res.id, token))
      history.push(redirect)
    }).fail( res => {
      sessionStorage.clear()
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
