import React, {Component, ComponentType} from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, InitialStateType, setCurrentPage, unfollow,} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from '../../api/api';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends Component <UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void
}
type MapStateToPropsType = {
    usersPage: InitialStateType
    currentPage: number
    pageSize: number
    totalUsersCount: number
    followingInProgress: Array<number>
    isFetching: boolean
}
/*
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        followingInProgress:getFollowingProgress(state),
        isFetching: getIsFetching(state)
    }
}
/*export default withAuthRedirect(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, getUsers
})(UsersContainer))*/

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, getUsers: requestUsers
    }))(UsersContainer)


