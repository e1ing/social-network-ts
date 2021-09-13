import React, {ChangeEventHandler, FC} from 'react';
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../asserts/images/user.jpg";
import s from "./ProfileInfo.module.css"
import {PathParamsType} from "../../ProfileContainer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: PathParamsType
    savePhoto: ()
}

const ProfileInfo: FC<ProfileInfoPropsType> = ({profile,status, updateStatus, isOwner, savePhoto}) => {
    if (!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEventHandler<HTMLInputElement>) => {
        if(e.target.files.length)
        {
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>
        <div className="classes.descriptionBlock">
            <img src={profile.photos.large||userPhoto} className={s.mainPhoto}></img>
            {isOwner && <input type = {"file"} onChange = {onMainPhotoSelected} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}
export default ProfileInfo;

