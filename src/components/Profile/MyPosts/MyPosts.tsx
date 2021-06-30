import React, {FC} from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";
import {InitialStateType} from "../../../redux/profile-reducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type MyPostsPropsType = {
    profilePage: InitialStateType
    addPost: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.profilePage.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    /*let newPostElement = React.createRef<HTMLTextAreaElement>();*/

    let onAddPost = (values: FormMessageType) => {
        props.addPost(values.newMyPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <AddMyPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );
}

type FormMessageType = {
    textarea: string
    newMyPostText: string
}

let AddMyPostForm: FC<InjectedFormProps<FormMessageType>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMyPostText"}/>
        </div>
        <button> Add post</button>
    </form>
}

const AddMyPostFormRedux  = reduxForm<FormMessageType>({form: "ProfileAddMyPostForm"})(AddMyPostForm);

export default MyPosts;
