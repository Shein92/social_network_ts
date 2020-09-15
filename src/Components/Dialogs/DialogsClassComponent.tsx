import React, { ChangeEvent } from 'react';
import dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDataType } from '../../Redux/state';
import { Redirect } from 'react-router-dom';

type DialogsPropsType = {
	messagesPage: DialogsDataType;
	isAuth: boolean

	sendMessage: () => void
	onNewMessageChange: (newText: string) => void
}

class Dialogs extends React.Component<DialogsPropsType> {

	dialogs = () => {
		return this.props.messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
	}

	message = () => {
		return this.props.messagesPage.messagesData.map(mes => {return <Message key={mes.id} message={mes.message} />})
	}

	onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		this.props.onNewMessageChange(event.currentTarget.value);
	}

	sendMessage = () => {
		this.props.sendMessage();
	}

	render() {
		if(this.props.isAuth === false) {
			return <Redirect to={'/login'}/>
		}
		return (
			<div className={dialog.dialogs}>
				<div className={dialog.dialogs_items}>
					{this.dialogs()}
					{/* {this.props.messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)} */}
				</div>
				<div className={dialog.messages}>
					{this.message()}
					{/* {this.props.messagesPage.messagesData.map(mes => <Message key={mes.id} message={mes.message}/>)} */}
					<textarea onChange={this.onNewMessageChange}
						value={this.props.messagesPage.newMessageBody}
						placeholder={"Enter your message"}></textarea>
					<div>
						<button onClick={this.sendMessage}>send</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Dialogs;