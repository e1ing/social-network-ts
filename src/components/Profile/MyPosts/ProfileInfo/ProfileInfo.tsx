import React from 'react';
import Preloader from "../../../common/preloader/Preloader";
import {ProfileType} from "../../../../redux/profile-reducer";
import  ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
           {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>*/}
            <div className="classes.descriptionBlock">
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
            )
}

export default ProfileInfo;