import React from 'react';
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";

type ProfileComponentType = {
    setUserProfile: (profile: any) => void
    profile: ProfileType;
}

export class ProfileContainer extends React.Component<ProfileComponentType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile"
                , {
                    params: {profile: 2}
                }
            ).then(response => {
            this.props.setUserProfile(response.data)
        });

    }

    render() {
        return (
            <Profile {...this.props.profile} />
        )
    }
}
export type MapStateToPropsType = {
    profilePage: InitialStateType,
}

let mapStateToProps = (state: AppStateType) => ({
profile: state.profilePage.profile
});


export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);