import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
// import { StateType } from '../../Redux/state';
import { logoutThunkCreator } from '../../Redux/auth-reducer'
import { AppStateType } from '../../Redux/redux-store';
import { getAuthorizedUserId, getEmail, getIsAuth, getLogin } from '../../Redux/users-selectors';

type HeaderContainerPropsType = {
	id: number | null, 
	email: string | null,
	login: string | null,
	isAuth: boolean

	logout: () => void
}

class HeaderContainer extends React.Component<any>{

	render() {
		return <Header 
				isAuth={this.props.isAuth}
				login={this.props.login}
				logout={this.props.logout}
				/>
	}
}

let mapStateToProps = (state: AppStateType) => {
	return {
		id: getAuthorizedUserId(state),
		email: getEmail(state),
		login: getLogin(state),
		isAuth: getIsAuth(state)
	}
}

export default connect(mapStateToProps, {
	// setUserDataThunkCreator,
	logout: logoutThunkCreator
})(HeaderContainer);