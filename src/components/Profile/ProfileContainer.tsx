import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        let id = this.props.match.params.id
        if (!id) {
            id = "2";
        }
        this.props.getUserProfile(id)
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer)));

//types
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    getUserProfile: any
}

type PathParamsType = {
    id?: string
}

type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


