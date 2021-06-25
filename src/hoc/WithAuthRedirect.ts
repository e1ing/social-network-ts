import {Redirect} from "react-router-dom";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {MapStateToPropsType} from "../components/Profile/ProfileContainer";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return <ConnectedAuthRedirectComponent/>
}