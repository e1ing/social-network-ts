import React, {FC} from 'react';
import styles from "./users.module.css";
import userPhoto from "../../asserts/images/Meelo.png";
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    getUsers: any
    followingInProgress: any
}

let Users: FC<UsersPropsType> = props => {
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
                <button disabled={followingInProgress.some((id: number) => id === u.id)}
                        onClick={() => unfollow(u.id)}>Unfollow </button>
                :
                <button disabled={followingInProgress.some((id: number) => id === u.id)}
                        onClick={() => follow(u.id)}> Follow </button>
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