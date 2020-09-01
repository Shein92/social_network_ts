import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profile-reducer'
import { StateType, UserProfileType } from '../../Redux/state';
import { withRouter } from 'react-router-dom';

type ProfileContainerPropsType = {
	setUserProfile: (userProfile: UserProfileType) => void,
	profile: UserProfileType
}

class ProfileContainer extends React.Component<any> {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) { 
			userId = 2; 
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data);
			});
	}

	render() {
		return (
			<Profile setUserProfile={this.props.setUserProfile} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
	setUserProfile
})(WithUrlDataContainerComponent);