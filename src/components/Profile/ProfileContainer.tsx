import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        let id = this.props.match.params.id
        if (!id) {
            id = "2";
        }
        this.props.getUserProfile(id)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));

//types
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: any
}

type PathParamsType = {
    id?: string
}

type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


