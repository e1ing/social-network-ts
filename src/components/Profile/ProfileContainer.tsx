import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);


type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    // toggleIsFetching: (isFetching: boolean) => void
    // setUsers: (users: Array<UserType>) => void
    // setTotalUsersCount: (isFetching: boolean) => void
    setUserProfile: (profile: ProfileType | null) => void
}
