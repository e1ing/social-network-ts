import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../asserts/images/Meelo.png";
import {InitialStateType, toggleFollowingProgress} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersPropsType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    getUsers: any
    followingInProgress: any
    /*setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void*/
}

let Users: React.FC<UsersPropsType> = props => {
    const {usersPage, follow, unfollow, onPageChanged, getUsers, followingInProgress} = props;

    let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={usersPage.currentPage === p ? styles.selectedPage : ""}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })
            }
        </div>

        <button onClick={getUsers}>Get users</button>
        {
            usersPage.users.map(u => <div key={u.id}>
<span>
    <div>
        <NavLink to={'/profile/' + u.id}>
        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
            </NavLink>
    </div>
    <div>
        {
            u.followed
                ?
                <button disabled={followingInProgress.some((id: any) => id === u.id)} onClick={() => {
                    toggleFollowingProgress(true,  +u.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/$(u.id)`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "2e663c7e-754e-4005-8ebe-08de0775050a"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                follow(u.id)
                            }
                        });
                    unfollow(u.id)
                    toggleFollowingProgress(false,  +u.id)
                }}>Unfollow</button>
                :
                <button disabled={followingInProgress.some((id: any) => id === u.id)} onClick={() => {
                    toggleFollowingProgress(true,  +u.id)
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/$(u.id)`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "2e663c7e-754e-4005-8ebe-08de0775050a"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                follow(u.id)
                            }
                            toggleFollowingProgress(false, +u.id)
                        });
                }}>Follow</button>
        }

        </div>
</span>
                <span>
    <span>
        <div>{u.name}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>

    </span>
</span>
            </div>)
        }
    </div>
}

export default Users;