import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import store, {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
   store:StoreType
}

const Profile: React.FC<PropsType> = ({store}) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={store}/>
    </div>
}
export default Profile;