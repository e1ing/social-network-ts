import React from 'react';
import styles from './users.module.css';
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {v1} from "uuid";
import axios from 'axios';
import userPhoto from '../../asserts/images/Meelo.png';


export type UserPropsType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

let Users/*: React.FC<UsersPropsType>*/ = (props:UserPropsType) => {
    if(props.usersPage.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUsers(response.data.items);
        });

    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
    </div>
    <div>
        {
            u.followed
                ?
                <button onClick={() => {
                    props.unfollow(u.id)
                }}>
                    unfollow
                </button>
                :
                <button onClick={() => {
                    props.follow(u.id)
                }}>
                    follow
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