import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    profile: null
}

const Profile: React.FC<PropsType> = (props) => {
const {profile} = props
    return <div>
        <ProfileInfo profile={profile}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;