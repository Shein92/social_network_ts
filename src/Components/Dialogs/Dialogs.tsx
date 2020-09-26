import React, { ChangeEvent } from 'react';
import dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDataType } from '../../Redux/state';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type DialogsPropsType = {
	messagesPage: DialogsDataType;

	sendMessage: () => void
	onNewMessageChange: (newText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

	let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
	let messagesElements = props.messagesPage.messagesData.map(mes => <Message key={mes.id} message={mes.message} />);

	return (
		<div className={dialog.dialogs}>
			<div className={dialog.dialogs_items}>
				{dialogsElements}
			</div> 
			<div>{messagesElements}</div>
			<AddMessageFormRedux 
				/>
		</div>
	)
}

type FormDataType = {
	newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<form className={dialog.messages} onSubmit={props.handleSubmit}>
			<Field component={"textarea"} 
				name={"newMessageBody"} 
				placeholder={"Enter your message"}></Field>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;