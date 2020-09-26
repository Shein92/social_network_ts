import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { StateType } from '../../Redux/state';

type props = any;

export const withAuthRedirect = (Component: any) => {
	class RedirectComponent extends React.Component<props>{
		render() {
			if (!this.props.isAuth) return <Redirect to={'/login'} />

			return <Component {...this.props} />
		}
	}

	let mapStateToPropsForRedirect = (state: StateType) => ({
		isAuth: state.auth.isAuth
	})

	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

	return ConnectedAuthRedirectComponent;
}