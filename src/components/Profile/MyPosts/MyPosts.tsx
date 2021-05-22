import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {InitialStateType} from "../../../redux/profile-reducer";

type PropsType = {
    profilePage: InitialStateType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

    let postsElements = props.profilePage.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    /*let newPostElement = React.createRef<HTMLTextAreaElement>();*/

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <button onClick={onAddPost}> Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );
}
export default MyPosts;