import { Dispatch } from "redux";
import { setUserDataThunkCreator } from "./auth-reducer";

type AppReducerStateType = {
    inititalized: boolean
};

type InitializedSuccessType = {
    type: "SET-INITIALIZED"
}

type ActionsType = InitializedSuccessType;

const initialState: AppReducerStateType = {
    inititalized: false
}

export const appReducer = (state: AppReducerStateType = initialState, action: ActionsType): AppReducerStateType => {
    switch(action.type) {
        case "SET-INITIALIZED": {
            return { ...state, inititalized: true}
        }
        default: {
            return state;
        }
    }
}

export const initializedSuccess = (): InitializedSuccessType => {
    return {type: 'SET-INITIALIZED'}
}

export const initializeApp = () => {
    return (dispathc: Dispatch<any>) => {
        dispathc(setUserDataThunkCreator())
        // promise.then(res => {
        //     dispathc(initializedSuccess);
        // })
        dispathc(initializedSuccess);
    } 
}