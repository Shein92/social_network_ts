import React from 'react';
import { connect } from 'react-redux';
import LoginReduxForm, { FormDataType } from './LoginForm/LoginForm';
import {loginThunkCreator} from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import { StateType } from '../../Redux/state';

const Login = (props: any) => {

	const onSubmit = (formData: FormDataType) => {
		props.login(formData.login, formData.password, formData.rememberMe)
	}

	if(props.isAuth) {
		return <Redirect to={"/profile"}/>
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

const mapStatetoProps = (state: StateType) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStatetoProps, {login: loginThunkCreator})(Login);