import { rerenderEntireTree } from './../render';
export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type UserType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
export type StateType = {
    profilePage: {
        postsData: Array<PostsDataType>
    }
    messagesPage: {
        dialogsData: Array<UserType>,
        messagesData: Array<MessagesType>
    }
}

let state: StateType = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you?", likesCount: 8 },
            { id: 2, message: "It's my first post", likesCount: 21 },
            { id: 3, message: "I love Kori <3", likesCount: 100 }
        ]
    },
    messagesPage: {
        dialogsData:[
            { id: 1, name: "Vasyan" },
            { id: 2, name: "Kori" },
            { id: 3, name: "Richi" },
            { id: 4, name: "Drake" },
            { id: 5, name: "Nyusia" },
            { id: 6, name: "George" },
        ],
        messagesData: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How is your IT-Kamasutra courses?" },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yomayo" },
        ]
    }
}

export let addPost = (postMessage: string) => {
    let newPost:PostsDataType = {id: 5, message: postMessage, likesCount: 0};

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state)
}

export let sendMessage = (sendMessage: string) => {
    let newMessage: MessagesType = {id: 5, message: sendMessage};

    state.messagesPage.messagesData.push(newMessage);
    rerenderEntireTree(state)
}

export default state;








// let postsData: Array<PostsDataType> = [
//     { id: 1, message: "Hi, how are you?", likesCount: 8 },
//     { id: 2, message: "It's my first post", likesCount: 21 },
//     { id: 3, message: "I love Kori <3", likesCount: 100 }
// ]

// let dialogsData: Array<UserType> = [
//     { id: 1, name: "Vasyan" },
//     { id: 2, name: "Kori" },
//     { id: 3, name: "Richi" },
//     { id: 4, name: "Drake" },
//     { id: 5, name: "Nyusia" },
//     { id: 6, name: "George" },
// ];
// let messagesData: Array<MessagesType> = [
//     { id: 1, message: "Hi" },
//     { id: 2, message: "How is your IT-Kamasutra courses?" },
//     { id: 3, message: "Yo" },
//     { id: 4, message: "Yomayo" },
// ];