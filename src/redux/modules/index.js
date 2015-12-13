import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import todo from './todo'

export default combineReducers({
  counter,
  todo,
  router: routeReducer
})
