import React, {FC} from 'react';
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}
const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {
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
            ava+description
        </div>
    </div>
}
export default ProfileInfo;