import { ActionsType, MessagesType, DialogsDataType } from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState: DialogsDataType = {
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
		{ id: 4, message: "Yomayo" },
	],
	newMessageBody: ''
}

const DialogsReducer = (state: DialogsDataType = initialState, action: ActionsType) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			// state.newMessageBody = action.body;
			if(action.body){
				return {...state, newMessageBody: action.body};
			}
			return state
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';

			let newMessage: MessagesType = { id: 5, message: body };
			state.messagesData.push(newMessage);
			return state;
		default:
			return state;
	}
}

export const updateNewMessageBodyActionCreator = (text: string): ActionsType =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: text })
export const sendMessageActionCreator = (): ActionsType =>
	({ type: SEND_MESSAGE })

export default DialogsReducer;