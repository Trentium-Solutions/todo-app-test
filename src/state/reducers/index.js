import {combineReducers} from 'redux'
import alertReducer from './alertReducer'
import tasksReducer from './tasksReducer'
import themeReducer from './themeReducer'

// combines state with reducers
const reducers = combineReducers({
  tasks: tasksReducer,
  alert: alertReducer,
  theme: themeReducer,
})

export default reducers
