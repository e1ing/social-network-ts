import styles from "./users.module.css";
import userPhoto from "../../asserts/images/user.jpg";
import React, { FC } from "react";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";


const Users: FC<UsersPropsType> = ({users,unfollow, follow, totalUsersCount, pageSize, onPageChanged, currentPage }) => {

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
                {pages.map(p => {
                    return <span onClick={(e) => {
                        onPageChanged(p)
                    }}
                                 className={currentPage === p ? styles.selectedPage : ""}>
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
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true, headers: {"API-KEY": "b00b044a-fabf-40f0-8522-d4dd85a812f0"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode===0) {
                                                unfollow(u.id)
                                            }
                                        })
                                    unfollow(u.id)}}> Unfollow </button>
                                :
                                <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {},
                                        {withCredentials: true,  headers: {"API-KEY": "b00b044a-fabf-40f0-8522-d4dd85a812f0"} })
                                        .then(response => {
                                            if (response.data.resultCode===0) {
                                                follow(u.id)
                                            }
                                         })
                                    follow(u.id)}}> Follow </button>
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
    export default Users;

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    onPageChanged:(pageNumber: number) => void
    currentPage: number
}