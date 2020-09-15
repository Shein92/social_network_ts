import { ActionsType,  StateType } from '../../Redux/state';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './DialogsClassComponent';
// import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state: StateType) => {
	return {
		messagesPage: state.messagesPage,
		isAuth: state.auth.isAuth
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