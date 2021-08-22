import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

const Profile: React.FC<PropsType> = ({profile, status, updateStatus}) => {

    return <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;

//types
type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}
