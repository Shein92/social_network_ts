import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getMyProfilePageThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../Redux/profile-reducer'
import { UserProfileType } from '../../Redux/state';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { getAuthorizedUserId, getIsAuth, getProfile, getStatus } from '../../Redux/users-selectors';
import { AppStateType } from '../../Redux/redux-store';
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
			if(!userId) {
				this.props.history.push("/login")
			}
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

let mapStateToProps = (state: AppStateType) => ({
	profile: getProfile(state),
	status: getStatus(state),
	authorizedUserId: getAuthorizedUserId(state),
	isAuth: getIsAuth(state)
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