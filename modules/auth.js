import $ from 'jquery'

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
        this.onChange(true)
      return
    }

  signInRequest(email, pass, (res) => {
    if (res.authenticated) {
      localStorage.token = res.token
      localStorage.id = res.id
    if (cb) cb(true)
      this.onChange(true)
    } else {
      if (cb) cb(false)
        this.onChange(false)
      }
   })
 },

 signUp(email, pass, cb) {
   cb = arguments[arguments.length - 1]
   signUpRequest(email, pass, (res) => {
     if (res.authenticated) {
       localStorage.token = res.token
       localStorage.id = res.id
     if (cb) cb(true)
       this.onChange(true)
     } else {
       if (cb) cb(false)
         this.onChange(false)
     }
   })
 },

 getToken() {
   return localStorage.token
 },

 getId() {
   return localStorage.id
 },

 logout(cb) {
   delete localStorage.token
   delete localStorage.id
   if (cb) cb()
     this.onChange(false)
   location.pathname = '/'
 },

 loggedIn() {
   return !!localStorage.token
 },

 onChange() {}
}

function signUpRequest(email, pass, cb) {
  $.ajax({
    url: '/api/signup',
    type: 'POST',
    dataType: 'JSON',
    contentType: 'application/json',
    data: JSON.stringify({ email: email, password: pass })
  }).done( res => {
    cb({ authenticated: res.authenticated, token: Math.random().toString(36).substring(7), id: res.id })
  }).fail( res => {
    cb({ authenticated: false })
  })
}

function signInRequest(email, pass, cb) {
  $.ajax({
    url: '/api/signin',
    type: 'POST',
    dataType: 'JSON',
    contentType: 'application/json',
    data: JSON.stringify({ email: email, password: pass })
  }).done( res => {
    if (res.authenticated)
      cb({ authenticated: res.authenticated, token: Math.random().toString(36).substring(7), id: res.id })
  }).fail( res => {
   console.log(res)
  })
}
