import React, {FC} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import { Dispatch } from 'redux';


let mapStateToProps=(state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
return {
    follow: (userId: string) => {
        dispatch(followAC(userId));
    },
    unfollow: (userId: string) => {
        dispatch(unfollowAC(userId));
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);

type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

