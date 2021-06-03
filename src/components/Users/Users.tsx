import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../asserts/images/Meelo.png";
import {InitialStateType, UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
  }

let Users: React.FC<UsersPropsType> = props => {
    const {usersPage, follow, unfollow} = props;

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
        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
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