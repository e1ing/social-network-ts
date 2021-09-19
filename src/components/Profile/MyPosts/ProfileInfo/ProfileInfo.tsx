import React, {ChangeEvent, FC, useState} from 'react';
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../asserts/images/user.jpg";
import {ProfileType} from "../../../../api/api";
import {ProfileDataForm} from './ProfileDataForm';
import s from 'ProfileInfo.module.css'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status,
                                                   updateStatus, isOwner, savePhoto}) => {

    const [editMode, setEditMode] = useState(false)

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

            {editMode
                ? <ProfileDataForm profile={profile} isOwner={isOwner}/>
                :<ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}

type ProfileDataTypes = {
    profile: ProfileType | null
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataTypes> = ({profile,isOwner,goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b> Full name </b>{profile.fullName}
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
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;

