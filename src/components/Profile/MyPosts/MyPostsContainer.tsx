import React from 'react';
import Post from "./Posts/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {ActionsTypes, PostType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import store from "../../../redux/redux-store";

type PropsType = {
    store: StoreType
    posts: Array<PostType>
    newPostText: string

}

const MyPostsContainer: React.FC<PropsType> = ({
                                                   store,
                                                   posts,

                                               }) => {

    let postsElements = posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addPost = () => {
        (addPostAC())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text);
        store.dispatch(action);
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={store.getState()}/>


}
export default MyPostsContainer;