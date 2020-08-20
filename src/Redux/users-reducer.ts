import { ActionsType } from "./state";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

type LocationType = {
	city: string,
	country: string
}
export type photoURLType = {
	small: string | null,
	large: string | null
}
export type UserType1 = {
	id: number,
	photos: photoURLType,
	followed: boolean,
	// fullName: string,
	name: string,
	status: string,
	location: LocationType
}

export type UsersType = {
	users: Array<UserType1>
}

let initialState: UsersType = {
	users: [
		// { id: 1, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: false, fullName: "Vasyl", status: "I'm a boss", location: { city: "Mukachevo", country: "Ukraine" } },
		// { id: 2, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: true, fullName: "Karina", status: "I love Vasyl", location: { city: "Uzhhorod", country: "Ukraine" } },
		// { id: 3, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: false, fullName: "George", status: "I hate Igor", location: { city: "Baranyntsi", country: "Ukraine" } },
		// { id: 4, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: true, fullName: "Diana", status: "I believe in tooth-fairies", location: { city: "Vilkhiwtsi", country: "Ukraine" } },
	],
}

const UsersReducer = (state: UsersType = initialState, action: ActionsType) => {

	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				})
			}
		}
		case 'UNFOLLOW': {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				})
			}
		}
		case 'SET-USERS': {
			return { ...state, users: [...state.users, ...action.users] }
		}

		default:
			return state;
	}
}

export const followActionCreator = (userId: number): ActionsType =>
	({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId: number): ActionsType =>
	({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users: Array<UserType1>): ActionsType => {
	return { type: SET_USERS, users }
}

export default UsersReducer;