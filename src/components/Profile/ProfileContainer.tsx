import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (profile: any) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type ProfileComponentType = MapStateToPropsType & MapDispatchPropsType;

type PathParamsType = {
    userId?: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileComponentType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 17186
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});


export default compose<ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
