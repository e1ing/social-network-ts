import React from 'react';
import classes from './Post.module.css';
import {PostType} from "../../../../redux/store";

const Post: React.FC<PostType> = ({id, message,likesCount}) => {
    return (
        <div>
            <div className={classes.item}>
                <img
                    src="https://tlum.ru/uploads/c2c776f1f20dd128d27ab941c26168c2e866ef6551da751aea7e83ae862a032a.jpeg"/>
                <div className={classes.item}>
                    {message}
                    <div>
                        <span>like</span>{likesCount}
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Post;