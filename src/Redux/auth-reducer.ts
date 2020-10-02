import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { getMyPage, login, logout } from '../API/api';
import { ActionsType } from './state';

const SET_USER_DATA = 'SET-USER-DATA';


export type setUserInitialStateDataType = {
	id: number | null,
	email: string | null,
	login: string | null,
	// isFetching?: boolean,
	isAuth: boolean
}

let initialState: setUserInitialStateDataType = {
	id: null,
	email: null,
	login: null,
	// isFetching: false
	isAuth: false
}

const AuthReducer = (state: setUserInitialStateDataType = initialState, action: ActionsType): setUserInitialStateDataType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			}
		}

		default: {
			return state
		}
	}
} 

export const setUserDataActionCreator = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): ActionsType => {
	return {type: 'SET-USER-DATA', data: {id: userId, email, login, isAuth}}
}

export const setUserDataThunkCreator = () => {
	// return (dispatch: (arg0: ActionsType) => void) => {
	return (dispatch: Dispatch) => {
		return getMyPage()
			.then(data => {
				if(data.resultCode === 0) {
					let {id, email, login} = data.data;
					dispatch(setUserDataActionCreator(id, email, login, true))
				}
			})
	}
}
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
	return (dispatch: any) => {
		login(email, password, rememberMe)
			.then(response => {
				if(response.data.stausCode === 0) {
					dispatch(setUserDataThunkCreator())
				} else {
					let message = response.data.messages.length > 0 ? response.data.messages[0] : "Somre error"
					dispatch(stopSubmit("login", {_error: message}))
				}
			})
	}
}
export const logoutThunkCreator = () => {
	return (dispatch: (arg0: ActionsType) => void) => {
		logout()
			.then(response => {
				if(response.data.stausCode === 0) {
					dispatch(setUserDataActionCreator(null, null, null, false))
				}
			})
	}
}

export default AuthReducer;