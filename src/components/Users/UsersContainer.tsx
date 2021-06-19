import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setUsers, setTotalUsersCount, toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import axios from  'axios';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";


type UsersContainerType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component <UsersContainerType> {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`,
            {
                withCredentials: true,
                params: {
                    page: this.props.usersPage.currentPage,
                    count: this.props.usersPage.pageSize
                }
            }).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users",
            {
                params: {page: pageNumber}
            }
        ).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>

            {this.props.usersPage.isFetching ? <Preloader/> : null}

            <Users
                usersPage={this.props.usersPage}
                onPageChanged={this.onPageChanged}
                unfollow={(id: string) => console.log(id)}
                follow={(id: string) => console.log(id)}
                getUsers={this.getUsers}
            />
        </>

    }
}


export type MapStateToPropsType = {
    usersPage: InitialStateType,
}
/*export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType*/

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}*/

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount: setTotalUsersCount, toggleIsFetching,
})(UsersContainer);
