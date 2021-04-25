import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";
import {addPost, ProfileCallbacksType, ProfilePageType, updateNewPostText} from "../../../redux/state";

const MyPosts: React.FC<ProfilePageType & ProfileCallbacksType> = ({
                                                posts,
                                                newPostText,
                                                addPostCallback,
                                                updateNewPostText,
                                            }) => {

    let postsElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)



    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={newTextChangeHandler}
                        value={newPostText}
                    />
                </div>
                <button onClick={addPostCallback}> Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );
}
export default MyPosts;