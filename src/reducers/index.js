import { combineReducers } from 'redux'
import salesReducer from './salesReducer'
import scheduleReducer from './scheduleReducer'
import userReducer from './userReducer'

export default combineReducers({

    schedule: scheduleReducer,
    sales: salesReducer,
    user: userReducer
})