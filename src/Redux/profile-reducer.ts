import { Dispatch } from "redux";
import { getMyProfilePage, getUserStatus, savePhotoAPI, updateUserStatus } from "../API/api";
import { ActionsType, PostType, UserProfileType } from "./state";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
	postsData: [
		{ id: 1, message: "Hi, how are you?", likesCount: 8 },
		{ id: 2, message: "It's my first post", likesCount: 21 },
		{ id: 3, message: "I love Kori <3", likesCount: 100 }
	],
	profile: null,
	status: ''
}

const ProfileReducer = (state: PostType = initialState, action: ActionsType) => {

	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				postsData: [{ id: 5, message: action.text, likesCount: 0 }, ...state.postsData]
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}
		case SET_USER_STATUS: {
			return {
				...state, status: action.status
			}
		}

		case 'SAVE-PHOTO': {
			return {
				...state, profile: { ...state.profile, photos: action.photos }
			}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = (newText: string): ActionsType =>
	({ type: ADD_POST, text: newText });
export const setUserProfile = (profile: UserProfileType): ActionsType =>
	({ type: SET_USER_PROFILE, profile });
export const setUserStatusACtionCreator = (status: string): ActionsType =>
	({ type: SET_USER_STATUS, status: status })
export const savePhotoSuccess = (photos: any): ActionsType =>
	({ type: 'SAVE-PHOTO', photos })

export const getMyProfilePageThunkCreator = (userId: number) => {
	return (dispatch: Dispatch) => {
		getMyProfilePage(userId).then(response => {
			dispatch(setUserProfile(response.data))
		})
	}
}
export const getUserStatusThunkCreator = (userId: number) => {
	return (dispatch: Dispatch) => {
		getUserStatus(userId).then(response => {
			dispatch(setUserStatusACtionCreator(response.data))
		})
	}
}

export const updateUserStatusThunkCreator = (status: string) => {
	return (dispatch: Dispatch) => {
		updateUserStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserStatusACtionCreator(status))
			}
		})
	}
}

export const savePhotoThunkCreator = (file: any) => {
	return (dispatch: Dispatch) => {
		savePhotoAPI(file).then(res => {
			if (res.data.resultCode === 0) {
				dispatch(savePhotoSuccess(res.data.data.photos))
			}
		})
	}
}

export default ProfileReducer;