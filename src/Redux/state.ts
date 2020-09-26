import { UserType1, UsersType } from "./users-reducer"

export type PostsDataType = {
	id: number,
	message: string,
	likesCount: number
}
export type UserType = {
	id: number,
	name: string
}
export type MessagesType = {
	id: number,
	message: string
}
export type StateType = {
	profilePage: PostType,
	messagesPage: DialogsDataType,
	usersPage: UsersType,
	auth: setUserProfileDataType
}

export type setUserProfileDataType = {
	id: number,
	email: string,
	login: string,
	// isFetching?: boolean,
	isAuth: boolean
}

export type PostType = {
	postsData: Array<PostsDataType>,
	profile: UserProfileType | null,
	status: string
}

export type UserProfileType = {
	aboutMe: string,
	contacts: ContactType,
	fullName: string,
	lookingForAJob: boolean,
	lookingForAJobDescription: string,
	photos: PhotoType,
	userId: number
}
export type ContactType = {
	facebook: string,
	github: string,
	instagram: string
	mainLink: null | string
	twitter: string
	vk: string
	website: null | string
	youtube: null | string
}

export type PhotoType = {
	large: string,
	small: string
}

export type DialogsDataType = {
	dialogsData: Array<UserType>,
	messagesData: Array<MessagesType>,
}

// export type StoreType = {
// 	_state: StateType,
// 	getState: () => StateType,
// 	_callSubscriber: (state: StateType) => void
// 	subscribe: (observer: any) => void
// 	dispatch: (action: ActionsType) => void
// }

export type AddPostActionType = {
	type: "ADD-POST",
	text: string
}

type UpdateNewPostTextActionType = {
	type: "UPDATE-NEW-POST-TEXT",
	newText: string
}

export type UpdateMessageActionType = {
	type: "UPDATE-NEW-MESSAGE-BODY",
	body: string
}

type SendMessageActionType = {
	type: "SEND-MESSAGE",
	message: string
}

export type FollowActionType = {
	type: 'FOLLOW',
	userId: number
}

export type UnFollowActionType = {
	type: 'UNFOLLOW',
	userId: number
}

export type SetUsersActionType = {
	type: 'SET-USERS',
	users: Array<UserType1>
}

export type SetCurrentPageType = {
	type: 'SET-CURRENT-PAGE',
	page: number
}

export type SetUsersTotalCountType = {
	type: 'SET-USERS-TOTAL-COUNT',
	usersCount: number
}

export type ToggleIsfetchingType = {
	type: 'TOGGLE-IS-FETCHING',
	isFetching: boolean
}
export type ToggleFollowingInProgressType = {
	type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
	isFetching: boolean,
	userId: number
	// followingInProgress: boolean
}

export type SetUserProfileType = {
	type: 'SET-USER-PROFILE',
	profile: any
}

export type UserDataType = {
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean 
}

export type SetUserDataType = {
	type: 'SET-USER-DATA',
	data: UserDataType
}

export type SetUserStatus = {
	type: 'SET-USER-STATUS',
	status: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateMessageActionType | FollowActionType | UnFollowActionType | SetUsersActionType | SetCurrentPageType | SetUsersTotalCountType | ToggleIsfetchingType | SetUserProfileType | SetUserDataType | ToggleFollowingInProgressType | SetUserStatus


// let store: StoreType = {
// 	_state: {
// 		profilePage: {
// 			postsData: [
// 				{ id: 1, message: "Hi, how are you?", likesCount: 8 },
// 				{ id: 2, message: "It's my first post", likesCount: 21 },
// 				{ id: 3, message: "I love Kori <3", likesCount: 100 }
// 			],
// 			newPostText: '',
// 		},
// 		messagesPage: {
// 			dialogsData: [
// 				{ id: 1, name: "Vasyan" },
// 				{ id: 2, name: "Kori" },
// 				{ id: 3, name: "Richi" },
// 				{ id: 4, name: "Drake" },
// 				{ id: 5, name: "Nyusia" },
// 				{ id: 6, name: "George" },
// 			],
// 			messagesData: [
// 				{ id: 1, message: "Hi" },
// 				{ id: 2, message: "How is your IT-Kamasutra courses?" },
// 				{ id: 3, message: "Yo" },
// 				{ id: 4, message: "Yomayo" }
// 			],
// 			newMessageBody: ''
// 		}
// 	},
// 	_callSubscriber(state: StateType) {
// 		console.log('state is changed')
// 	},

// 	//state: StateType | undefined
// 	subscribe(observer: () => void) {
// 		this._callSubscriber = observer;//паттерн observer
// 	},
// 	getState() {
// 		return this._state;
// 	},
// 	dispatch(action: ActionsType) {

// 		this._state.profilePage = ProfileReducer(this._state.profilePage, action);
// 		this._state.messagesPage = DialogsReducer(this._state.messagesPage, action);

// 		this._callSubscriber(this._state);
// 	}
// }

// export default store;
// window.store: Window  = store;