import styles from "../../Users/Users.module.css";
import userPhoto from "../../../asserts/images/user.jpg";
import React, {FC} from "react";
import {UserType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UsersSearchForm} from "../../Users/UsersSearchForm";

export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

const Paginator: FC<PaginatorPropsType> = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            <UsersSearchForm/>
        </div>

        <div>
            {pages.map(p => {

                return <span className={currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>
                   {p}</span>
            })}

        </div>

    </div>

}

export default Paginator;

