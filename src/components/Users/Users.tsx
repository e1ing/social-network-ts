import * as axios from 'axios';
import React, {FC} from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from "./users.module.css"
import userPhoto from "../../asserts/images/user.jpg"

type UsersPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: FC<UsersPropsType> = ({users, setUsers, follow, unfollow}) => {

    const getUsers = () => {
        if (users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0").then(response => {
                setUsers(response.data.items)
            })
        }
    }

       /* setUsers([{
            id: 1,
            photoUrl: "https://64.media.tumblr.com/b6fe98122ee1194b337ade30b4869579/tumblr_inline_ntpfktqljm1spg4o9_540.jpg",
            followed: true,
            name: "Pako",
            status: "Pako loves buns",
            location: {country: "Ukraine", city: "Lviv"}
        },
            {
                id: 2,
                photoUrl: "https://64.media.tumblr.com/b6fe98122ee1194b337ade30b4869579/tumblr_inline_ntpfktqljm1spg4o9_540.jpg",
                followed: false,
                name: "Tako",
                status: "Tako loves buns",
                location: {country: "Ukraine", city: "Kyiv"}
            }])*/

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small!==null ? u.photos.small : "userPhoto"} className={styles.userPhoto}/> </div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={() => {
                                    follow(u.id)
                                }}> Unfollow </button>
                                :
                                <button onClick={() => {
                                    unfollow(u.id)
                                }}> Follow </button>
                            }

                        </div>
                    </span>
                    <span>
    <div>{u.name}</div>
    <div>{u.status}</div>
</span>

                    <span>
    <div>{"u.location.country"}</div>
    <div>{"u.location.city"}</div>
</span>
                </div>)
            }
        </div>
    )
}

export default Users;