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
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}


class Users extends React.Component <UsersPropsType> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`,
            {
                params: {
                    page: this.props.usersPage.currentPage,
                    count: this.props.usersPage.pageSize
                }
            }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
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

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get("https://social-network.samuraijs.com/api/1.0/users",
            {params: {page: pageNumber}
            }
            ).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={this.props.usersPage.currentPage === p ? styles.selectedPage: ""}
                                     onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })
                }
            </div>

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
                    Unfollow
                </button>
                :
                <button onClick={() => {
                    this.props.follow(u.id)
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
}


export default Users;