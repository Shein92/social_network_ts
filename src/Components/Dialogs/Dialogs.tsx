import React, { ChangeEvent } from 'react';
import dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDataType, PostType } from '../../Redux/state';
import { CombinedState } from 'redux';

type DialogsPropsType = {
	messagesPage: DialogsDataType;

	sendMessage: () => void
	onNewMessageChange: (newText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

	let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
	// props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = props.messagesPage.messagesData.map(mes => <Message message={mes.message} />);
	// props.state.messagesData.map(mes => <Message message={mes.message} />);
	let newMessageBody = props.messagesPage.newMessageBody;
	// props.state.newMessageBody;

	let sendMessage = () => {
		props.sendMessage();
	}
	let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		let text = event.currentTarget.value;
		props.onNewMessageChange(text);
	}
	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogs_items}>
				{dialogsElements}
			</div>
			<div className={dialog.messages}>
				{messagesElements}
				<textarea onChange={onNewMessageChange}
					value={newMessageBody}
					placeholder={"Enter your message"}></textarea>
				<div>
					<button onClick={sendMessage}>send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;