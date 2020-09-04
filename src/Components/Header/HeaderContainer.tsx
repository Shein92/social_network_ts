import React from 'react';
import Header from './Header';
// import axios from 'axios';
import { connect } from 'react-redux';
import { StateType } from '../../Redux/state';
import {setUserDataActionCreator} from '../../Redux/auth-reducer'
import { getMyPage } from '../../API/api';

type HeaderContainerPropsType = {
	id: number, 
	email: string,
	login: string,
	isAuth: boolean

	setUserDataActionCreator: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{

	componentDidMount() {
		// axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
		// 	withCredentials: true
		// })
		getMyPage()
			.then(data => {
				if(data.resultCode === 0) {
					let {id, email, login} = data.data;
					this.props.setUserDataActionCreator(id, email, login)
				}
			})
	}

	render() {
		return <Header 
				isAuth={this.props.isAuth}
				login={this.props.login}
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
	setUserDataActionCreator
})(HeaderContainer);