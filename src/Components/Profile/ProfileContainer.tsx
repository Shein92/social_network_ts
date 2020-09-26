import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getMyProfilePageThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../Redux/profile-reducer'
import { StateType, UserProfileType } from '../../Redux/state';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
// import { compose } from 'redux';

type ProfileContainerPropsType = {
	profile: UserProfileType,
	getMyProfilePageThunkCreator: (userId: number) => void
}

class ProfileContainer extends React.Component<any> {

	componentDidMount() {
		let userId: number = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
		}


		this.props.getMyProfilePageThunkCreator(userId);
		this.props.getUserStatusThunkCreator(userId);
	}

	render() {

		return (
			<Profile setUserProfile={this.props.setUserProfile} 
				profile={this.props.profile} 
				status={this.props.status} 
				updateStatus={this.props.updateUserStatusThunkCreator}/>
		)
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
	getMyProfilePageThunkCreator,
	getUserStatusThunkCreator,
	updateUserStatusThunkCreator
})(WithUrlDataContainerComponent)

// export default compose(
// 	connect(mapStateToProps, {
// 		getMyProfilePageThunkCreator
// 	}),
// 	withRouter,
// 	withAuthRedirect
// )(ProfileContainer)