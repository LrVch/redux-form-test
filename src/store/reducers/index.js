
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './user'
import uiReducer from './ui'
  

export default combineReducers({
  form: formReducer,
  user: userReducer,
  ui: uiReducer
})