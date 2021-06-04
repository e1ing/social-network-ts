import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../asserts/images/Meelo.png";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    getUsers: () => void
    /*setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void*/
}

let Users: React.FC<UsersPropsType> = props => {
    const {usersPage, follow, unfollow, onPageChanged, getUsers} = props;

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
        <NavLink to={'/profile/'+ u.id}>
        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
            </NavLink>
    </div>
    <div>
        {
            u.followed
                ?
                <button onClick={() => {
                    unfollow(u.id)
                }}>
                    Unfollow
                </button>
                :
                <button onClick={() => {
                    follow(u.id)
                }}>
                    Follow
                </button>
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