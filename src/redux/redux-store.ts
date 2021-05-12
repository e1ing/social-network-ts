import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPagr: dialogsReduser,
    sidebarPage: sidebarReduser
});

let store = createStore(reducers);

export default store;
