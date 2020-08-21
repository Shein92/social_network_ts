import React, { ChangeEvent } from 'react';
import prof from './MyPosts.module.css';
import Post from './Posts/Post';
import { PostsDataType } from '../../../Redux/state';

type MyPostsType = {
	newPostText: string,
	posts: Array<PostsDataType>
	updateNewPostText: (text: string) => void
	addPost: () => void
}

class MyPosts extends React.Component <MyPostsType> {
	// constructor(props:MyPostsType) {
	// 	super(props);
	// 	this.props.addPost() = this.props.addPost()
	// }
	post = () => {
		return this.props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount}/>)
	}
	addPost = ()  =>{
		this.props.addPost();
	};
	onPostsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		// let text = event.currentTarget.value;
		this.props.updateNewPostText(event.currentTarget.value)
	}

	render() {
		return <div className={prof.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea value={this.props.newPostText}
						onChange={this.onPostsChange} />
				</div>
				<div>
					<button onClick={this.addPost}>Add post</button>
				</div>
			</div>
			<div className={prof.posts}>
				{this.post()}
				{/* {this.props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}/>)} */}
			</div>
		</div>
	}
} 

export default MyPosts;