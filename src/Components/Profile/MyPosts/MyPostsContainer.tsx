import React from 'react';
// import { PostsDataType, ActionsType } from '../../../Redux/state';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { Store, CombinedState } from 'redux';
import { PostType, DialogsDataType, ActionsType } from '../../../Redux/state';

type MyPostsContainerType = {
	// newPostText: string,
	// posts: Array<PostsDataType>
	// dispatch: (action: ActionsType) => void,
	store: Store<CombinedState<{ profilePage: PostType; messagesPage: DialogsDataType; }>, ActionsType>
}

function MyPostsContainer(props: MyPostsContainerType) {
	
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let onPostChange = (text: string) => {
		let action = updateNewPostActionCreator(text)
		props.store.dispatch(action);
	}

	return (
		<MyPosts updateNewPostText={onPostChange}
			addPost={addPost}
			newPostText={state.profilePage.newPostText}
			posts={state.profilePage.postsData} />
	)
}

export default MyPostsContainer;