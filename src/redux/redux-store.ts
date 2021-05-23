import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";
import usersReducer from "./users-reducer";


let rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReducer
    /*sidebarPage: sidebarReduser*/
});

export type AppStateType = ReturnType<typeof rootReducer> //state of application
export  type RootReduxStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export type ReduxStoreType = typeof store
// @ts-ignore
window.store=store;
export default store;
