import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {PathParamsType} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: PathParamsType
    savePhoto: (status: string) => void
}


const Profile: React.FC<PropsType> = ({profile, status, updateStatus,isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;

