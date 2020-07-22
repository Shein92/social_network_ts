import React from 'react';
import prof from './Post.module.css';

type PostPropsType = {
    message: string,
    likeCount: number
}

function Post(props: PostPropsType) {
    return (
        <div className={prof.item}>
            <img src="https://www.meme-arsenal.com/memes/97de80ba3e828921e43c56324a02c235.jpg" alt="" />
            {props.message}
            <div>
                <span>like: </span>{props.likeCount} 
            </div>
        </div>
    )
}

export default Post;