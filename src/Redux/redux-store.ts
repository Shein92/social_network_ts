import {createStore, combineReducers} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';
import UsersReducer from './users-reducer';


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer,
    usersPage: UsersReducer
})

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers);

export default store;