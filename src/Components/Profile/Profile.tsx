import React from 'react';
import prof from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostsDataType } from '../../Redux/state';
// import { PostsDataType } from '../..';

type ProfilePropsType = {
    state: {
        postsData: Array<PostsDataType>
    }
    addPost: (postMessage: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={prof.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;