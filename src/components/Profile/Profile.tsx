import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Preloader} from "../common/Preloader/Preloader";
import {ProfileType} from "../../api/api";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType|null)=> void
}


const Profile: React.FC<PropsType> = ({profile, status, updateStatus,isOwner, savePhoto, saveProfile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}
                     isOwner={isOwner}
                     savePhoto={savePhoto}
                   /*  saveProfile = {saveProfile}*/
        />
        <MyPostsContainer/>
    </div>
}
export default Profile;

