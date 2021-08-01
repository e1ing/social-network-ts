import React, {FC} from 'react';
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';


const ProfileInfo: FC<ProfileInfoPropsType> = ({profile,status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }
    return <div>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>
        <div className="classes.descriptionBlock">
            <img src={profile.photos.large}></img>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}
export default ProfileInfo;

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}