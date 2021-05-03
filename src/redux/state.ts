import {v1} from "uuid";

let rerenderEntireTree = () => {
    console.log('State changed')
}

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

let state: RootStateType = {
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
}


export type ProfileCallbacksType = {
    addPostCallback: () => void
    updateNewPostText: (postText: string) => void
}

export const addPost = () =>{
    const newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText =''
    rerenderEntireTree();
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer; //наблюдатель
}

export default state;

//store - OOP