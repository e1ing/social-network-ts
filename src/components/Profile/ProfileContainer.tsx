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
        let id = this.props.match.params.id
        if (!id) {
            id = "17186";
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
    status: state.profilePage.status
})

export default compose<ComponentType>(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter, withAuthRedirect)(ProfileContainer)

//types
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}
type MapDispatchToPropsType = {
    getUserProfile: (id: string) => void
    getStatus: (status: string) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    id?: string
}

type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


