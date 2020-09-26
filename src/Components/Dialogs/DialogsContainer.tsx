import { ActionsType,  StateType } from '../../Redux/state';
import { sendMessageActionCreator } from '../../Redux/dialogs-reducer';
// import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './DialogsClassComponent';
// import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
// import { compose } from 'redux';

let mapStateToProps = (state: StateType) => {
	return {
		messagesPage: state.messagesPage,
		isAuth: state.auth.isAuth
	}
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
	return {
		// onNewMessageChange: (newText: string) => {
		// 	dispatch(updateNewMessageBodyActionCreator(newText))
		// },
		sendMessage: (newMessageBody: string) => {
			dispatch(sendMessageActionCreator(newMessageBody))
		}
	}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;

// export default compose(
// 	connect(mapStateToProps, mapDispatchToProps),
// 	withAuthRedirect
// )(Dialogs);