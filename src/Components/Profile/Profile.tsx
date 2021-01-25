import React from 'react';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { UserProfileType } from '../../Redux/state';

type ProfilePropsType = {
	profile: null | UserProfileType
	setUserProfile: () => void,
	updateStatus: (status: string) => void
	status: string
	isOwner: boolean
	savePhoto: (file: any) => void
}

function Profile(props: ProfilePropsType) {
	return (
		<div className={prof.content}>
			<ProfileInfo profile={props.profile} status={props.status} isOwner={props.isOwner} savePhoto={props.savePhoto} updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile;