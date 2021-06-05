import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";
import {ProfileType} from "../../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null,
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className="classes.descriptionBlock">
                <img src={props.profile.photos.large}></img>
                <div>{props.profile.fullName}
                    <div/>
                </div>
            </div>
        </div>
            )
}

export default ProfileInfo;