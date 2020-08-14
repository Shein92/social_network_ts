import React from 'react';
import { ActionsType, DialogsDataType, PostType, StateType } from '../../Redux/state';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import { CombinedState, Store } from 'redux';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// type DialogsPropsType = {
// 	// state: DialogsDataType
// 	// dispatch: (action: ActionsType) => void
// 	store: Store<CombinedState<{ profilePage: PostType; messagesPage: DialogsDataType; }>, ActionsType>
// }

// const DialogsContainer = (props: any) => {

// 	let state = props.store.getState().messagesPage;

// 	let sendMessage = () => {
// 		let action = sendMessageActionCreator()
// 		props.store.dispatch(action);
// 	}
// 	let onNewMessageChange = (text: string) => {
// 		let action = updateNewMessageBodyActionCreator(text);
// 		props.store.dispatch(action)
// 	}
// 	return (
// 		<Dialogs sendMessage={sendMessage}
// 			onNewMessageChange={onNewMessageChange}
// 			state={state}
// 		/>
// 	)
// }

let mapStateToProps = (state: StateType) => {
	return {
		messagesPage: state.messagesPage
	}
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
	return {
		onNewMessageChange: (newText: string) => {
			dispatch(updateNewMessageBodyActionCreator(newText))
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;