import React from 'react';
import {addPostAC, InitialStateType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage: InitialStateType
    }
type MapDispatchPropsType ={
    addPost: () => void
    updateNewPostText: (text: string) => void

}

export type MyPostsPropsType =MapStatePropsType & MapDispatchPropsType


let mapStateToProps=(state:MapStatePropsType):MapStatePropsType => {
    return {
        // posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
        profilePage: state.profilePage
    }
}

    let mapDispatchToProps =(dispatch: Dispatch): MapDispatchPropsType => {
        return {
            addPost: () => {
                dispatch(addPostAC());
            },

            updateNewPostText: (text)  => {
               let action = updateNewPostTextAC (text);
               dispatch(action)
            }
        }
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;