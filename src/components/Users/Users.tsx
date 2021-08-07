import styles from "./users.module.css";
import userPhoto from "../../asserts/images/user.jpg";
import React, {FC} from "react";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


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

        <div>
            <UsersSearchForm/>
        </div>
        <div>
            {pages.map(p => {

                return <span className={currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}
                >
                   {p}</span>
            })}

        </div>
        {
            users.map(u => <div key={u.id}>
                    <span>
                        <div>
                              <NavLink to={"/profile/"}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                              </NavLink>
                              </div>
                        <div>
                            {u.followed
                                ?
                                <button disabled={followingInProgress
                                    .some(id => id === u.id)}
                                        onClick={() => {
                                            unfollow(u.id)
                                        }}> Unfollow </button>
                                :
                                <button disabled={followingInProgress
                                    .some(id => id === u.id)} onClick={() => {
                                    follow(u.id)
                                }}>Follow</button>
                            }

                        </div>
                    </span>
                <span>
    <div>{u.name}</div>
    <div>{u.status}</div>
</span>

            </div>)
        }
    </div>

}

const UsersSearchForm = () => {

}


export default Users;

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