import { addPostActionCreator } from '../../../Redux/profile-reducer';
// import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer';
// import MyPosts from './MyPosts';
import MyPosts from './MyPostsClassComponent';
import { ActionsType, StateType } from '../../../Redux/state';
import { connect } from 'react-redux';

let mapStateToProps = (state: StateType) => {
	return {
		// newPostText: state.profilePage.newPostText,
		posts: state.profilePage.postsData
	}
}

let mapDispatchToProps = (dispatc: (action: ActionsType) => void) => {
	return {
		addPost: (newText: string) => {
			dispatc(addPostActionCreator(newText))
		},
		// updateNewPostText: (text: string) => {
		// 	dispatc(updateNewPostActionCreator(text))
		// }
	}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;