import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebarPage: sidebarReduser
});

export  type RootReduxStateType = ReturnType<typeof reducers>

let store = createStore(reducers);


export type ReduxStoreType = typeof store

export default store;
