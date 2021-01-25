import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Posts/Post';
import { PostsDataType } from '../../../Redux/state';

type MyPostsType = {
	newPostText: string,
	posts: Array<PostsDataType>
	updateNewPostText: (text: string) => void
	addPost: () => void
}

const MyPosts = React.memo((props: MyPostsType) => {
	let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

	let newPostElement = React.createRef<HTMLTextAreaElement>();

	let addPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		if (newPostElement.current) {
			let text = newPostElement.current.value;
			props.updateNewPostText(text)
		}
	}

	return (
		<div className={prof.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} value={props.newPostText}
						onChange={onPostChange} />
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={prof.posts}>
				{postElements}
			</div>
		</div>
	)
})

export default MyPosts;