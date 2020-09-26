import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Posts/Post';
import { PostsDataType } from '../../../Redux/state';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

type MyPostsType = {
	// newPostText: string,
	posts: Array<PostsDataType>
	// updateNewPostText: (text: string) => void
	addPost: (newText:string) => void
}

class MyPosts extends React.Component<MyPostsType> {
	// constructor(props:MyPostsType) {
	// 	super(props);
	// 	this.props.addPost() = this.props.addPost()
	// }
	post = () => {
		return this.props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount} />)
	}
	addPost = (values: FormDataType) => {
		this.props.addPost(values.newPostMessageBody);
	};
	// onPostsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
	// 	// let text = event.currentTarget.value;
	// 	this.props.updateNewPostText(event.currentTarget.value)
	// }

	render() {
		return <div className={prof.postsBlock}>
			<h3>My posts</h3>
			{/* <div>
				<div>
					<textarea value={this.props.newPostText}
						onChange={this.onPostsChange} />
				</div>
				<div>
					<button onClick={this.addPost}>Add post</button>
				</div>
			</div> */}
			<AddNewPostFormRedux onSubmit={this.addPost}/>
			<div className={prof.posts}>
				{this.post()}
				{/* {this.props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}/>)} */}
			</div>
		</div>
	}
}

type FormDataType = {
	newPostMessageBody: string
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field 
				name={"newPostMessageBody"}
				component={Textarea}
				placeholder={"Enter your message"}
				validate={[requiredField, maxLength10]}
				 />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "addNewPostForm"})(AddNewPostForm)

export default MyPosts;