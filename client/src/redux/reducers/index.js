import { GET_RECIPES } from "../actions/index";

const initialState = {
    loading: false,
    recipes:[]
}

export default function rootReducer(state = initialState, action) {
    if(action.type === 'GET_RECIPES'){
        return{
            ...state,
            recipes: action.payload,
            loading: false
        }
    }
}