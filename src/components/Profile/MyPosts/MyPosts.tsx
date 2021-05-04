import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";
import {
    ActionsTypes,
    addPostAC, PostType,
    updateNewPostTextAC
} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<PropsType> = ({
                                          posts,
                                          newPostText,
                                          dispatch
                                      }) => {

    let postsElements = posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        dispatch(addPostAC(newPostText));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextAC(text);
        dispatch(action)
    }


    /* const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
         updateNewPostText(e.currentTarget.value);
     }*/

    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={newPostText}
                    />
                </div>
                <button onClick={addPost}> Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );
}
export default MyPosts;