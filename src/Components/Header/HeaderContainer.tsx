import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { StateType } from '../../Redux/state';
import { setUserDataThunkCreator, logoutThunkCreator } from '../../Redux/auth-reducer'

type HeaderContainerPropsType = {
	id: number, 
	email: string,
	login: string,
	isAuth: boolean

	setUserDataThunkCreator: () => void
	logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{

	componentDidMount() {
		this.props.setUserDataThunkCreator();
	}

	render() {
		return <Header 
				isAuth={this.props.isAuth}
				login={this.props.login}
				logout={this.props.logout}
				/>
	}
}

let mapStateToProps = (store: StateType) => {
	return {
		id: store.auth.id,
		email: store.auth.email,
		login: store.auth.login,
		isAuth: store.auth.isAuth
	}
}

export default connect(mapStateToProps, {
	setUserDataThunkCreator,
	logout: logoutThunkCreator
})(HeaderContainer);