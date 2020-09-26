import { addPostActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPostsClassComponent';
import { ActionsType, StateType } from '../../../Redux/state';
import { connect } from 'react-redux';

let mapStateToProps = (state: StateType) => {
	return {
		posts: state.profilePage.postsData
	}
}

let mapDispatchToProps = (dispatc: (action: ActionsType) => void) => {
	return {
		addPost: (newText: string) => {
			dispatc(addPostActionCreator(newText))
		}
	}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;