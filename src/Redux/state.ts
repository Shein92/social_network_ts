import ProfileReducer from "./profile-reducer"
import DialogsReducer from "./dialogs-reducer"

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
	profilePage: PostType
	messagesPage: DialogsDataType
}

export type PostType = {
	postsData: Array<PostsDataType>,
	newPostText: string,
}

export type DialogsDataType = {
	dialogsData: Array<UserType>,
	messagesData: Array<MessagesType>,
	newMessageBody: string
}

export type StoreType = {
	_state: StateType,
	getState: () => StateType,
	_callSubscriber: (state: StateType) => void
	subscribe: (observer: any) => void
	dispatch: (action: ActionsType) => void
}

export type AddPostActionType = {
	type: "ADD-POST"
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
	// sendMessage: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateMessageActionType


let store: StoreType = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, message: "Hi, how are you?", likesCount: 8 },
				{ id: 2, message: "It's my first post", likesCount: 21 },
				{ id: 3, message: "I love Kori <3", likesCount: 100 }
			],
			newPostText: '',
		},
		messagesPage: {
			dialogsData: [
				{ id: 1, name: "Vasyan" },
				{ id: 2, name: "Kori" },
				{ id: 3, name: "Richi" },
				{ id: 4, name: "Drake" },
				{ id: 5, name: "Nyusia" },
				{ id: 6, name: "George" },
			],
			messagesData: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How is your IT-Kamasutra courses?" },
				{ id: 3, message: "Yo" },
				{ id: 4, message: "Yomayo" }
			],
			newMessageBody: ''
		}
	},
	_callSubscriber(state: StateType) {
		console.log('state is changed')
	},

	//state: StateType | undefined
	subscribe(observer: () => void) {
		this._callSubscriber = observer;//паттерн observer
	},
	getState() {
		return this._state;
	},
	dispatch(action: ActionsType) {

		this._state.profilePage = ProfileReducer(this._state.profilePage, action);
		this._state.messagesPage = DialogsReducer(this._state.messagesPage, action);

		this._callSubscriber(this._state);
	}
}

export default store;
// window.store: Window  = store;