import { AppStateType } from "./redux-store";

export const getUserds = (state: AppStateType) => {
	return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
	return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
	return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
	return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
	return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
	return state.usersPage.followingInProgress
}


export const getProfile = (state: AppStateType) => {
	return state.profilePage.profile
}
export const getStatus = (state: AppStateType) => {
	return state.profilePage.status
}


export const getAuthorizedUserId = (state: AppStateType) => {
	return state.auth.id
}
export const getIsAuth = (state: AppStateType) => {
	return state.auth.isAuth
}
export const getEmail = (state: AppStateType) => {
	return state.auth.email
}
export const getLogin = (state: AppStateType) => {
	return state.auth.login
}

export const getInitializedStatus = (state: AppStateType) => {
	return state.app.inititalized
}