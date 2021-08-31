import React, {FC} from "react";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    followingInProgress: Array<number>
}

const Users: FC<UsersPropsType> = ({
                                       users, unfollow, follow, totalUsersCount,
                                       pageSize, onPageChanged, currentPage,
                                       followingInProgress
                                   }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    console.log('pages', pagesCount)
    console.log('totalUsersCount', totalUsersCount)
    console.log('pageSize', pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize} portionSize={pageSize}/>

        {users.map(u => <User user={u} key={ u.id}
                              followingInProgress={followingInProgress}
                              unfollow={unfollow}
                              follow={follow}/>
        )}
    </div>

}

export default Users;

