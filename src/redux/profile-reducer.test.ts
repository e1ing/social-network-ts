import profileReducer, {addPostAC, deletePost, PostType, ProfileType} from "./profile-reducer";
import {v1} from "uuid";

let state = {
    newPostText: "",
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 7},
        {id: v1(), message: "It's my second post", likesCount: 5}
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    status: ""
};

it('new post should be added', () => {
    let action = addPostAC("it-kamasutra.com")
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = addPostAC("it-kamasutra.com")
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be dacrement', () => {
    let action = deletePost("1")
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});
