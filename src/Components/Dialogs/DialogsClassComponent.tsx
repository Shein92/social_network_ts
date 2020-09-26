import React from 'react';
import dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDataType } from '../../Redux/state';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';

type DialogsPropsType = {
	messagesPage: DialogsDataType;
	isAuth: boolean

	sendMessage: (value: string) => void
}

class Dialogs extends React.Component<DialogsPropsType> {

	dialogs = () => {
		return this.props.messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
	}

	message = () => {
		return this.props.messagesPage.messagesData.map(mes => { return <Message key={mes.id} message={mes.message} /> })
	}

	addNewMessage = (values: FormDataType) => {
		this.props.sendMessage(values.newMessageBody)
	}

	render() {
		if (!this.props.isAuth) return <Redirect to={'/login'} />

		return (
			<div className={dialog.dialogs}>
				<div className={dialog.dialogs_items}>
					{this.dialogs()}
				</div>
				<div>
					{this.message()}
				</div>
				<AddMessageFormRedux onSubmit={this.addNewMessage}/>
			</div>
		)
	}
}

type FormDataType = {
	newMessageBody: string
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<div className={dialog.messages}>
			<form onSubmit={props.handleSubmit}>
				<Field
					name={"newMessageBody"}
					component={Textarea}
					validate={[requiredField, maxLength100]}
					placeholder={"Enter your message"}></Field>
				<div>
					<button>Send</button>
				</div>
			</form>
		</div>
	)
}

const AddMessageFormRedux = reduxForm<FormDataType>({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;