import React, {FC} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {follow} from "../../redux/users-reducer";


let mapStateToProps=(state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) ={
return {
    follow: (id: string) => {
        dispatch(follow(id));
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);