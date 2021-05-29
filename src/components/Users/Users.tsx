import React from 'react';
import userPhoto from "../../asserts/images/Meelo.png";
import styles from "./users.module.css";
import axios from "axios";
import {InitialStateType, UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

class Users extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    getUsers = () => {
        if (this.props.usersPage.users.length === 0
        ) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
    </div>
    <div>
        {
            u.followed
                ?
                <button onClick={() => {
                    this.props.unfollow(u.id)
                }}>
                    unfollow
                </button>
                :
                <button onClick={() => {
                    this.props.follow(u.id)
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
}


export default Users;