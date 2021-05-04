import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ProfileCallbacksType = {
    addPostCallback: () => void
    updateNewPostText: (postText: string) => void
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state:  RootStateType) => void
    subscribe: (observer: (state:  RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>;

export const addPostAC = (postText: string) => ({
        type: ADD_POST,
        postText: postText
    }) as const


     export const updateNewPostTextAC = (newText: string) => ({
            type: UPDATE_NEW_POST_TEXT,
            newText: newText
        }) as const


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

     let store: StoreType  = {
        _state: {
            profilePage: {
                newPostText: "",
                posts: [
                    {id: v1(), message: "Hi, how are you?", likesCount: 12},
                    {id: v1(), message: "It's my first post", likesCount: 7},
                    {id: v1(), message: "It's my second post", likesCount: 5}
                ]
            },
            dialogsPage: {
                dialogs: [
                    {id: v1(), name: 'Dimych'},
                    {id: v1(), name: 'Andrew'},
                    {id: v1(), name: 'Sveta'},
                    {id: v1(), name: 'Sasha'},
                    {id: v1(), name: 'Viktor'}
                ],
                messages: [
                    {id: v1(), message: 'Hi'},
                    {id: v1(), message: "What's up"},
                    {id: v1(), message: 'Yo'},
                    {id: v1(), message: 'Crap!'},
                    {id: v1(), message: 'Hi, Bro!'}
                ]
            },
            sidebar: {}
        },
        _callSubscriber() {
            console.log('State changed');
        },

        getState() {
            return this._state;
        },
        subscribe(observer) {
            this._callSubscriber = observer; //наблюдатель
        },

        dispatch(action: ActionsTypes) {
            if (action.type === "ADD-POST") {
                let newPost: PostType = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state);
            } else if (action.type === "UPDATE-NEW-POST-TEXT") {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        }
    }



export default store;

    //store - OOP