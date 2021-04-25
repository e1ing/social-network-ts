import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {addPost, ProfileCallbacksType, ProfilePageType} from "../../redux/state";

const Profile: React.FC<ProfilePageType & ProfileCallbacksType> = ({
                                                posts,
                                                newPostText,
                                                addPostCallback,
                                                updateNewPostText,
                                            }) => {

    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={posts}
            newPostText={newPostText}
            addPostCallback={addPostCallback}
            updateNewPostText={updateNewPostText}/>
    </div>
}
export default Profile;