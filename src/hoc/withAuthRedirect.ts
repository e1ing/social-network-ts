import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import { ComponentType } from "react";


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})


export function withAuthRedirect  <T>(Component: ComponentType<T>)  {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
            if(!isAuth) return <Redirect to="/login"/>
            return <Component {...restProps as T} />
    }
     return connect(mapStateToProps)(RedirectComponent);
}



type MapStateToPropsType = {
    isAuth: boolean
}


