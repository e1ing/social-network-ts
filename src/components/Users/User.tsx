import styles from "./Users.module.css";
import userPhoto from "../../asserts/images/user.jpg";
import React, {FC} from "react";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User: FC<UsersPropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
<span>
 <div>
<NavLink to={"/profile/" + user.id}>
<img src={user.photos.small !== null ? user.photos.small : userPhoto}
     className={styles.userPhoto}/>
</NavLink>
</div>
<div>
{user.followed
    ?
    <button disabled={followingInProgress
        .some(id => id === user.id)}
            onClick={() => {
                unfollow(user.id)
            }}> Unfollow </button>
    :
    <button disabled={followingInProgress
        .some(id => id === user.id)} onClick={() => {
        follow(user.id)
    }}>Follow</button>
}
</div>
</span>
            <span>
<div>{user.name}</div>
<div>{user.status}</div>
</span>
            <span>
<div>{"u.location.country"}</div>
<div>{"u.status.location.city"}</div>
</span>
        </div>)
}


