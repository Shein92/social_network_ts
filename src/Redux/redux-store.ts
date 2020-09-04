import {createStore, combineReducers} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import UsersReducer from './users-reducer';
import AuthReducer from './auth-reducer';


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers);

//@ts-ignore
window.store = store;

export default store;