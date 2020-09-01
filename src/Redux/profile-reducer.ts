import { ActionsType, PostType, UserProfileType } from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	postsData: [
		{ id: 1, message: "Hi, how are you?", likesCount: 8 },
		{ id: 2, message: "It's my first post", likesCount: 21 },
		{ id: 3, message: "I love Kori <3", likesCount: 100 }
	],
	newPostText: '',
	profile: null,
}

const ProfileReducer = (state: PostType = initialState, action: ActionsType) => {

	switch (action.type) {
		case ADD_POST: {
			return { 
				...state,
				newPostText: '',
				postsData: [...state.postsData, 
					{ id: 5, message: state.newPostText, likesCount: 0 }
				]  
			};
		}
		case UPDATE_NEW_POST_TEXT: {

			return {
				...state,
				newPostText: action.newText
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = (): ActionsType =>
	({ type: ADD_POST });
export const updateNewPostActionCreator = (text: string): ActionsType =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile: UserProfileType): ActionsType =>
	({ type: SET_USER_PROFILE, profile });

export default ProfileReducer;