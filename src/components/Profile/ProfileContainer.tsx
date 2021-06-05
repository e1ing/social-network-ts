import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

export type MapStateToPropsType = {
    profile: ProfileType | null,
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}
type ProfileComponentType = MapStateToPropsType & MapDispatchPropsType;

type PathParamsType ={
    userId?: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileComponentType



class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {userId=2}
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"
                , {
                    params: {profile: userId}
                }
            ).then(response => {
            this.props.setUserProfile(response.data)
        });

    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);