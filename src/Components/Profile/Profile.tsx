import React from 'react';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { UserProfileType } from '../../Redux/state';

type ProfilePropsType = {
	profile: null | UserProfileType
    setUserProfile: () => void
}

function Profile(props: ProfilePropsType) {
	debugger
	return (
		<div className={prof.content}>
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile;