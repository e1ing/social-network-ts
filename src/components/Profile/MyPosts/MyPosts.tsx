import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";
import {PostType} from "../../../redux/store";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text:string) => void
}

const MyPosts: React.FC<PropsType> = ({
                                          posts,
                                          newPostText,
                                          addPost,
                                          updateNewPostText
                                      }) => {

    let postsElements = posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        addPost();

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

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
                <button onClick={onAddPost}> Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );
}
export default MyPosts;