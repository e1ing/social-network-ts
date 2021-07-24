import React, {Component} from 'react';
import styles from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import  axios from "axios";

type UsersPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class Users extends Component<UsersPropsType, {}>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small!==null ? u.photos.small : "userPhoto"} className={styles.userPhoto}/> </div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={() => {this.props.unfollow(u.id)}}> Unfollow </button>
                                :
                                <button onClick={() => {this.props.follow(u.id)}}> Follow </button>
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
    }
}

export default Users;