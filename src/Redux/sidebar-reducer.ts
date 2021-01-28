import { ActionsType } from './state';

let initialState = {}

type InitialStateType = typeof initialState;

export const sidebarReducer = (state = initialState, action: ActionsType) =>{
    return state
}
