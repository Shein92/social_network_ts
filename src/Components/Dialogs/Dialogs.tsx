import React, { ChangeEvent } from 'react';
import dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDataType } from '../../Redux/state';

type DialogsPropsType = {
	messagesPage: DialogsDataType;

	sendMessage: () => void
	onNewMessageChange: (newText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

	let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
	let messagesElements = props.messagesPage.messagesData.map(mes => <Message key={mes.id} message={mes.message} />);
	let newMessageBody = props.messagesPage.newMessageBody;

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