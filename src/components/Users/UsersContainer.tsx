import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setUsers, setTotalUsersCount, toggleIsFetching,
    unfollow,
    UserType, toggleFollowingProgress
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {followAPI, usersAPI} from '../../api/api';


type MapStateToPropsType = {
    usersPage: InitialStateType
    followingInProgress: Array<number>
    currentPage: number
    pageSize: number
    totalUsersCount: number
}

export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends Component <UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        followAPI.getUsers(this.props.totalUsersCount, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>

            {this.props.usersPage.isFetching ? <Preloader/> : null}

            <Users
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                getUsers={usersAPI.getUsers}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress
})(UsersContainer);
