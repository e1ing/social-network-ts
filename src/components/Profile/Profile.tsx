import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import store, {ActionsTypes, DialogsPageType, ProfilePageType, StoreType} from "../../redux/store";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<PropsType> = ({profilePage,dispatch}) => {

    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={profilePage.posts}
            newPostText={profilePage.newPostText}
            dispatch={dispatch}/>
    </div>
}
export default Profile;