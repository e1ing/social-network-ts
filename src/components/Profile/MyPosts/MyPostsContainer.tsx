import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/store";
import {connect} from "react-redux";

let mapStateToProps=(state:RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}

    let mapDispatchToProps =() => {
        return {
            addPost: () => {
                dispatch(addPostAC());
            },

            onPostChange: (text: string) => {
                dispatch(text);
            }
        }
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;