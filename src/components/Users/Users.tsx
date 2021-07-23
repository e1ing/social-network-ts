import React, {FC} from 'react';
import {setUsersAC, UserType} from "../../redux/users-reducer";
import styles from "./users.module.css"

type UsersType = {
    users: Array<UserType>
}

let Users: FC <UsersType> = (users) => {

    if (users.length === 0){
        setUsers([])
    }
    return (
        <div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photoUrl} className={styles.userPhoto}/> </div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={()=> {users.follow(u.id)}}> Unfollow </button>
                                :
                                <button onClick={()=> {users.unfollow(u.id)}}> Follow </button>
                            }

                        </div>
                    </span>
<span>
    <div>{u.name}</div>
    <div>{u.status}</div>
</span>

<span>
    <div>{u.location.country}</div>
    <div>{u.location.city}</div>
</span>
                </div>)
            }
    </div>
    )
}

export default Users;