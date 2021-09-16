import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {ProfileType} from "../../api/api";


class ProfileContainer extends Component<CommonProfileContainerPropsType> {
    refreshProfile() {
        let id = Number(this.props.match.params.userId)
        if (!id) {
            id = this.props.authorizedUserId /*? this.props.authorizedUserId : 17186 ;*/
            if (!id) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(id)
        this.props.getStatus(id)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        this.refreshProfile()
    }

    render() {
        return <div>
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     saveProfile={this.props.saveProfile}
            />
        </div>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})



export default compose<ComponentType>(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter, withAuthRedirect)(ProfileContainer)

//types
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (id: number) => void
    getStatus: (status: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: () => void
}

export type PathParamsType = {
    userId?: string
    // userId?: number
}

type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


