import { createStore, combineReducers } from 'redux';
import ContactReducer from './reducers/contact-reducer';
import LoginReducer from './reducers/login-reducer';

let reducers = combineReducers({
    contactsPage: ContactReducer,
    loginPage: LoginReducer
})

let store = createStore(
    reducers
);

export default store;