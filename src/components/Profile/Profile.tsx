import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import store, {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType | null
}

const Profile: React.FC<PropsType> = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;