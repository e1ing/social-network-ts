import React from 'react';
import styles from './users.module.css';
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {v1} from "uuid";


export type UserPropsType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

let Users/*: React.FC<UsersPropsType>*/ = (props:UserPropsType) => {
    if(props.usersPage.users.length === 0)
        props.setUsers([
        {
            id: v1(),
            photoUrl: "https://decider.com/wp-content/uploads/2020/07/the-legend-of-korra-2.jpg?quality=90&strip=all&w=1284&h=856&crop=1",
            followed: false,
            fullName: "Dmitry",
            status: "I'm a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: v1(),
            photoUrl: "https://decider.com/wp-content/uploads/2020/07/the-legend-of-korra-2.jpg?quality=90&strip=all&w=1284&h=856&crop=1",
            followed: true,
            fullName: "Sasha",
            status: "I like vareniki",
            location: {city: "Kiev", country: "Ukraine"}
        },
        {
            id: v1(),
            photoUrl: "https://decider.com/wp-content/uploads/2020/07/the-legend-of-korra-2.jpg?quality=90&strip=all&w=1284&h=856&crop=1",
            followed: false,
            fullName: "Andrew",
            status: "Just a person",
            location: {city: "Simferopol", country: "Crimea"}
        }
    ]);

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photoUrl} className={styles.usersPhoto}/>
    </div>
    <div>
        {
            u.followed
                ?
                <button onClick={() => {
                    props.follow(u.id)
                }}>
                    unfollow
                </button>
                :
                <button onClick={() => {
                    props.unfollow(u.id)
                }}>
                    follow
                </button>
        }

        </div>
</span>
                <span>
    <span>
        <div>{u.fullName}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{u.location.country}</div>
        <div>{u.location.city}</div>

    </span>
</span>
            </div>)
        }
    </div>
}

export default Users;