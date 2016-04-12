import { combineReducers } from 'redux'
import contacts from './contacts-reducer'
import dash from './dash-reducer'

const rootReducer = combineReducers({
    dash,
    contacts
});

export default rootReducer;