import React, {Component} from 'react';
import styles from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import  axios from "axios";
import userPhoto from "../../asserts/images/user.jpg"

type UsersPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class Users extends Component<UsersPropsType, {}>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log('res',response)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        console.log('pages', pagesCount)
        console.log('totalUsersCount', this.props.totalUsersCount)
        console.log('pageSize', this.props.pageSize)

        let pages = []
        for (let i=1; i<=pagesCount; i++){
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(p=>{
                   return <span onClick={(e)=> {this.onPageChanged(p)}}
                                className={this.props.currentPage===p ? styles.selectedPage: ""}>
                   {p}</span>
            })}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small!==null ? u.photos.small : userPhoto} className={styles.userPhoto}/> </div>
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
    {/*<div>{"u.location.country"}</div>
    <div>{"u.location.city"}</div>*/}
</span>
                </div>)
            }
        </div>
    }
}

export default Users;