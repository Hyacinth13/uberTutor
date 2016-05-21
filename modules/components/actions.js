import $ from 'jquery'
// import * as types from '../constants/ActionTypes';
// import { browserHistory } from 'react-router';
// import fetch from 'isomorphic-fetch';
// import moment from 'moment';

//Auth actions

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

// Chat actions

// function addMessage(message) {
//   return {
//     type: types.ADD_MESSAGE,
//     message
//   };
// }

// export function receiveRawMessage(message) {
//   return {
//     type: types.RECEIVE_MESSAGE,
//     message
//   };
// }

// export function receiveRawChannel(channel) {
//   return {
//     type: types.RECEIVE_CHANNEL,
//     channel
//   };
// }

// function addChannel(channel) {
//   return {
//     type: types.ADD_CHANNEL,
//     channel
//   };
// }

// export function typing(username) {
//   return {
//     type: types.TYPING,
//     username
//   };
// }

// export function stopTyping(username) {
//   return {
//     type: types.STOP_TYPING,
//     username
//   };
// }

// export function changeChannel(channel) {
//   return {
//     type: types.CHANGE_CHANNEL,
//     channel
//   };
// }

// export function welcomePage(username) {
//   return {
//     type: types.SAVE_USERNAME,
//     username
//   };
// }

// export function fetchChannels(user) {
//   return dispatch => {
//     dispatch(requestChannels())
//     return fetch(`/api/channels/${user}`)
//       .then(response => response.json())
//       .then(json => dispatch(receiveChannels(json)))
//       .catch(error => {throw error});
//   }
// }

// function requestChannels() {
//   return {
//     type: types.LOAD_CHANNELS
//   }
// }

// function receiveChannels(json) {
//   return {
//     type: types.LOAD_CHANNELS_SUCCESS,
//     json
//   }
// }

// function requestMessages() {
//   return {
//     type: types.LOAD_MESSAGES
//   }
// }

// export function fetchMessages(channel) {
//   return dispatch => {
//     dispatch(requestMessages())
//     return fetch(`/api/messages/${channel}`)
//       .then(response => response.json())
//       .then(json => dispatch(receiveMessages(json, channel)))
//       .catch(error => {throw error});
//   }
// }

// function receiveMessages(json, channel) {
//   const date = moment().format('lll');
//   return {
//     type: types.LOAD_MESSAGES_SUCCESS,
//     json,
//     channel,
//     date
//   }
// }

// function shouldFetchMessages(state) {
//   const messages = state.messages.data;
//   if (!messages) {
//     return true
//   }
// }

// export function fetchMessagesIfNeeded() {
//   return (dispatch, getState) => {
//     if (shouldFetchMessages(getState())) {
//       return dispatch(fetchMessages())
//     }
//   }
// }

// function loadingValidationList() {
//   return {
//     type: types.LOAD_USERVALIDATION
//   }
// }

// function receiveValidationList(json) {
//   return {
//     type: types.LOAD_USERVALIDATION_SUCCESS,
//     json
//   }
// }

// export function usernameValidationList() {
//   return dispatch => {
//     dispatch(loadingValidationList())
//     return fetch('/api/all_usernames')
//       .then(response => {
//         return response.json()
//     })
//       .then(json => {
//         return dispatch(receiveValidationList(json.map((item) => item.local.username)))
//     })
//       .catch(error => {throw error});
//   }
// }

// export function createMessage(message) {
//   return dispatch => {
//     dispatch(addMessage(message))
//     return fetch('/api/newmessage', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(message)})
//       .catch(error => {throw error});
//   }
// }

// export function createChannel(channel) {
//   return dispatch => {
//     dispatch(addChannel(channel))
//     return fetch ('/api/channels/new_channel', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(channel)})
//       .catch(error => {throw error});
//   }
// }

