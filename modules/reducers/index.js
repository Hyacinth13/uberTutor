import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import auth from './auth'
import '../styles.css'


const rootReducer = combineReducers({
  routing: routeReducer,
  auth
})

export default rootReducer
