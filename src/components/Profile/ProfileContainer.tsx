import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {
    profile: ProfileType | null,
}

type MapDispatchPropsType = {
    getUserProfile: (profile: any) => void
}
type ProfileComponentType = MapStateToPropsType & MapDispatchPropsType;

type PathParamsType = {
    userId?: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileComponentType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);

    }

    render() {

        return (
            <Profile {...this.props} />
        )
    }
}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});


export default compose <ComponentType>(
    connect(mapStateToProps,
        {getUserProfile}),
    withRouter,
    withAuthRedirect) (ProfileContainer)
