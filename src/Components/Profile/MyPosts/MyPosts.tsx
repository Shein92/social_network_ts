import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Posts/Post';
import { PostsDataType } from '../../../Redux/state';

type MyPostsType = {
	posts: Array<PostsDataType>
	addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsType) {
	let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

	let newPostElement = React.createRef<HTMLTextAreaElement>();

	let addPost = () => {
		if (newPostElement.current) {
			let text = newPostElement.current.value;
			props.addPost(text);
			newPostElement.current.value = '';
		}
	}

	return (
		<div className={prof.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
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
}

export default MyPosts;