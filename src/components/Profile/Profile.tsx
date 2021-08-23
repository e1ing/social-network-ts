import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}


const Profile: React.FC<PropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;

