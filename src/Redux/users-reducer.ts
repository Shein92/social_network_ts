import { followUser, getUsers, unfollowUser } from "../API/api";
import { ActionsType } from "./state";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

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

export type FollowingInProgressType = []

export type UsersType = {
	users: Array<UserType1>,
	pageSize: number,
	totalUsersCount: number,
	currentPage: number,
	isFetching: boolean,
	followingInProgress: Array<number>
}

let initialState: UsersType = {
	users: [
		// { id: 1, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: false, fullName: "Vasyl", status: "I'm a boss", location: { city: "Mukachevo", country: "Ukraine" } },
		// { id: 2, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: true, fullName: "Karina", status: "I love Vasyl", location: { city: "Uzhhorod", country: "Ukraine" } },
		// { id: 3, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: false, fullName: "George", status: "I hate Igor", location: { city: "Baranyntsi", country: "Ukraine" } },
		// { id: 4, photoURL: 'https://bnetcmsus-a.akamaihd.net/cms/template_resource/03/03U4D4KNCWEH1530817724856.jpg', followed: true, fullName: "Diana", status: "I believe in tooth-fairies", location: { city: "Vilkhiwtsi", country: "Ukraine" } },
	],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
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
			return { ...state, users: action.users }
		}
		case 'SET-CURRENT-PAGE': {
			return { ...state, currentPage: action.page }
		}
		case 'SET-USERS-TOTAL-COUNT': {
			return { ...state, totalUsersCount: action.usersCount }
		}
		case 'TOGGLE-IS-FETCHING': {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		}

		default:
			return state;
	}
}

export const follow = (userId: number): ActionsType =>
	({ type: FOLLOW, userId });
export const unFollow = (userId: number): ActionsType =>
	({ type: UNFOLLOW, userId });
export const setUsers = (users: Array<UserType1>): ActionsType => {
	return { type: SET_USERS, users }
}
export const setCurrentPage = (currentPageNumber: number): ActionsType => {
	return { type: SET_CURRENT_PAGE, page: currentPageNumber }
}
export const setUsersTotalCount = (usersCount: number): ActionsType => {
	return { type: SET_USERS_TOTAL_COUNT, usersCount: usersCount }
}
export const toggleIsFetching = (isFetching: boolean): ActionsType => {
	return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ActionsType => {
	return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
	return (dispatch: (arg0: ActionsType) => void) => {
		dispatch(toggleIsFetching(true));
		getUsers(currentPage, pageSize)
			.then(data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setUsersTotalCount(data.totalCount))
			});
	}
}

export const followUsersThunkCreator = (userId: number) => {
	return (dispatch: (arg0: ActionsType) => void) => {
		dispatch(toggleFollowingProgress(true, userId));
		followUser(userId)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(follow(userId));
				}
				dispatch(toggleFollowingProgress(false, userId));
			})
	}
}

export const unfollowUsersThunkCreator = (userId: number) => {
	return (dispatch: (arg0: ActionsType) => void) => {
		dispatch(toggleFollowingProgress(true, userId))
		unfollowUser(userId)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(unFollow(userId));
				}
				dispatch(toggleFollowingProgress(false, userId));
			})
	}
}

export default UsersReducer;