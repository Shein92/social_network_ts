import React from 'react';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile() {
	debugger
	return (
		<div className={prof.content}>
			<ProfileInfo />
			<MyPostsContainer/>
		</div>
	)
}

export default Profile;