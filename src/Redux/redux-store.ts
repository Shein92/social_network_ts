import {createStore, combineReducers, applyMiddleware} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import UsersReducer from './users-reducer';
import AuthReducer from './auth-reducer';
import thunk from 'redux-thunk'


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunk));

//@ts-ignore
window.store = store;

export default store;