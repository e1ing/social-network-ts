import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";


type UsersContainerType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class UsersContainer extends React.Component <UsersContainerType> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`,
            {
                params: {
                    page: this.props.usersPage.currentPage,
                    count: this.props.usersPage.pageSize
                }
            }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    getUsers = () => {
        if (this.props.usersPage.users.length === 0
        ) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get("https://social-network.samuraijs.com/api/1.0/users",
            {
                params: {page: pageNumber}
            }
        ).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            props.pageSize={this.props.pageSize}
            currrentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
        />

    }
}


export type MapStateToPropsType = {
    usersPage: InitialStateType,
}
export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
        // users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);