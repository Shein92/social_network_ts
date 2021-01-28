import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { getMyPage, login, logout, securityAPI } from '../API/api';
import { ActionsType } from './state';

const SET_USER_DATA = 'auth/SET-USER-DATA';


export type setUserInitialStateDataType = {
	id: number | null,
	email: string | null,
	login: string | null,
	// isFetching?: boolean,
	isAuth: boolean,
	captcha: string | null
}

let initialState: setUserInitialStateDataType = {
	id: null,
	email: null,
	login: null,
	// isFetching: false
	isAuth: false,
	captcha: null
}

const AuthReducer = (state: setUserInitialStateDataType = initialState, action: ActionsType): setUserInitialStateDataType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			}
		}

		case 'GET-CAPTCHA-URL': {
			return {...state, captcha: action.payload.url}
		}

		default: {
			return state
		}
	}
}

export const setUserDataActionCreator = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): ActionsType => {
	return { type: 'auth/SET-USER-DATA', data: { id: userId, email, login, isAuth } }
}

export const setUserDataThunkCreator = () => {
	// return (dispatch: (arg0: ActionsType) => void) => {
	return async (dispatch: Dispatch) => {
		let response = await getMyPage()
		if (response.resultCode === 0) {
			let { id, email, login } = response.data;
			dispatch(setUserDataActionCreator(id, email, login, true))
		}
		// .then(data => {
		// 	if (data.resultCode === 0) {
		// 		let { id, email, login } = data.data;
		// 		dispatch(setUserDataActionCreator(id, email, login, true))
		// 	}
		// })
	}
}

export const getCaptchUrlSuccess = (url: string) => {
	return {type: 'GET-CAPTCHA-URL', payload: {url: url}} as const
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
	return async (dispatch: any) => {
		let response = await login(email, password, rememberMe);
		// .then(response => {
		// if (response.data.statusCode === 0) {
		if (response.data.resultCode === 0) {
			dispatch(setUserDataThunkCreator())
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl);
			}
			let message = response.data.messages.length > 0 ? response.data.messages[0] : "Somre error"
			dispatch(stopSubmit("login", { _error: message }))
		}
		// })
	}
}

export const getCaptchaUrl = () => {
	return async (dispatch: any) => {
		const response = await securityAPI.getCaptcha()
		// .then(response => {
		
		const captchaUrl = response.data.url;

		// let message = response.data.messages.length > 0 ? response.data.messages[0] : "Somre error"
		dispatch(getCaptchUrlSuccess(captchaUrl))
		// })
	}
}

export const logoutThunkCreator = () => {
	return async (dispatch: (arg0: ActionsType) => void) => {
		let response = await logout();
		// .then(response => {
		if (response.data.stausCode === 0) {
			dispatch(setUserDataActionCreator(null, null, null, false))
		}
		// })
	}
}

export default AuthReducer;