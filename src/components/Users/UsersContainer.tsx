import React, {Component, ComponentType} from 'react';
import {connect} from "react-redux";
import {follow, getUsers, InitialStateType, setCurrentPage, unfollow,} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from '../../api/api';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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

export default withAuthRedirect(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, getUsers
})(UsersContainer))

/*
export default compose<ComponentType>(withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, getUsers
    })(UsersContainer)
)(UsersContainer)
*/

