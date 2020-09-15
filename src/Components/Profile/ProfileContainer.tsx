import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getMyProfilePageThunkCreator } from '../../Redux/profile-reducer'
import { StateType, UserProfileType } from '../../Redux/state';
import { Redirect, withRouter } from 'react-router-dom';

type ProfileContainerPropsType = {
	profile: UserProfileType,
	getMyProfilePageThunkCreator: (userId: number) => void
}

class ProfileContainer extends React.Component<any> {

	componentDidMount() {
		let userId: number = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}


		this.props.getMyProfilePageThunkCreator(userId);
	}

	render() {
		if(this.props.isAuth === false) {
			return <Redirect to={'/login'}/>
		}
		return (
			<Profile setUserProfile={this.props.setUserProfile} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
	getMyProfilePageThunkCreator
})(WithUrlDataContainerComponent);