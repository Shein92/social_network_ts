import React from 'react';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionsType, PostType, DialogsDataType } from '../../Redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { CombinedState, Store } from 'redux';

// type ProfilePropsType = {
// 	// state: PostType
// 	// dispatch: (action: ActionsType) => void
// 	store: Store<CombinedState<{ profilePage: PostType; messagesPage: DialogsDataType; }>, ActionsType>
// }

function Profile(props: any) {
	debugger
	return (
		<div className={prof.content}>
			<ProfileInfo />
			<MyPostsContainer
			// <MyPostsContainer store={props.store} 
				// posts={props.state.postsData}
				// newPostText={props.state.newPostText}
				// dispatch={props.dispatch}
			/>
		</div>
	)
}

export default Profile;