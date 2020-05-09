import { combineReducers } from 'redux'
import salesReducer from './salesReducer'
import scheduleReducer from './scheduleReducer'
import userReducer from './userReducer'
import householdReducer from './householdReducer'
import errorReducer from './errorReducer'

export default combineReducers({

    schedule: scheduleReducer,
    sales: salesReducer,
    user: userReducer,
    household: householdReducer,
    error:errorReducer

    
})