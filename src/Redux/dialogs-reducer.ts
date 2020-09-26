import { ActionsType, DialogsDataType } from "./state";

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
}

const DialogsReducer = (state: DialogsDataType = initialState, action: ActionsType) => {

	switch (action.type) {
		case SEND_MESSAGE:{
			let body = action.message;
			return {
				...state,
				messagesData: [...state.messagesData, { id: 5, message: body }]
			};
		}
		default:
			return state;
	}
}

export const sendMessageActionCreator = (newMessageBody: string): ActionsType =>
	({ type: SEND_MESSAGE, message: newMessageBody })

export default DialogsReducer;