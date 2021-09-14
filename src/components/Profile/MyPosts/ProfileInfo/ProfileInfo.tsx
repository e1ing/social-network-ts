import React, {ChangeEvent, FC} from 'react';
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../asserts/images/user.jpg";
import s from "./ProfileInfo.module.css"
import {PathParamsType} from "../../ProfileContainer";
import {ProfileType} from "../../../../api/api";
import {savePhoto} from "../../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    // isOwner: PathParamsTypeb
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }


    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>
        <div className="classes.descriptionBlock">
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto}></img>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            <div>
                <div>
                    <b> Full name </b>{profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>
                   <b> Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
                </div>

                {profile.lookingForAJob &&
                <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
                    }

                <div>
                    <b> About me:</b> {profile.aboutMe ? "yes" : "no"}
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {})}
                </div>
            </div>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;

