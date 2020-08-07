import {createStore, combineReducers} from 'redux';
import ProfileReducer from './profile-reducer';
import DialogsReducer from './dialogs-reducer';


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer
})

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers);

export default store;