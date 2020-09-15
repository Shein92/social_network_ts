import { getMyPage } from '../API/api';
import { ActionsType } from './state';

const SET_USER_DATA = 'SET-USER-DATA';


export type setUserInitialStateDataType = {
	id: number | null,
	email: string | null,
	login: string | null,
	isFetching?: boolean,
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
				isAuth: true
			}
		}

		default: {
			return state
		}
	}
} 

export const setUserDataActionCreator = (userId: number, email: string, login: string): ActionsType => {
	return {type: 'SET-USER-DATA', data: {id: userId, email, login}}
}

export const setUserDataThunkCreator = () => {
	return (dispatch: (arg0: ActionsType) => void) => {
		getMyPage()
			.then(data => {
				if(data.resultCode === 0) {
					let {id, email, login} = data.data;
					dispatch(setUserDataActionCreator(id, email, login))
				}
			})
	}
}

export default AuthReducer;