import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        console.log(this.props.match.params);
        let id = Number(this.props.match.params.userId)
        if (!id) {
            id = this.props.authorizedUserId /*? this.props.authorizedUserId : 17186 ;*/
            if(!id){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(id)
        this.props.getStatus(id)
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter, withAuthRedirect)(ProfileContainer)

//types
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number| null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (id: number) => void
    getStatus: (status: number) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId?: string
}

type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


