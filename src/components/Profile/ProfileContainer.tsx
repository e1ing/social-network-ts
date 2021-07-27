import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

type PathParamsType = {
    userId?: string
}

type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType>  & ProfileContainerPropsType



class ProfileContainer extends Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2' ;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
            })
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


// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));




