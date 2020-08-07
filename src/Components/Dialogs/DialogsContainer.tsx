import React from 'react';
import { ActionsType, DialogsDataType, PostType } from '../../Redux/state';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import { CombinedState, Store } from 'redux';
import Dialogs from './Dialogs';

type DialogsPropsType = {
	// state: DialogsDataType
	// dispatch: (action: ActionsType) => void
	store: Store<CombinedState<{ profilePage: PostType; messagesPage: DialogsDataType; }>, ActionsType>
}

const DialogsContainer = (props: DialogsPropsType) => {

	let state = props.store.getState();

	let sendMessage = () => {
		let action = sendMessageActionCreator()
		props.store.dispatch(action);
	}
	let onNewMessageChange = (text: string) => {
		let action = updateNewMessageBodyActionCreator(text);
		props.store.dispatch(action)
	}
	return (
		<Dialogs sendMessage={sendMessage}
			onNewMessageChange={onNewMessageChange}
			state={state}
		/>
	)
}

export default DialogsContainer;