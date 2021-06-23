import { GET_RECIPES } from "../actions/index";
import { GET_NAME_RECIPES } from "../actions/index";
import { GET_RECIPE_DETAIL } from "../actions/index";
import {GET_DIETS} from "../actions/index";

const initialState = {
  recipesLoad: [],
  recipeDetail: {},
  recipeDiets:[]
};

export default function rootReducer(state = initialState, action) {
  if (action.type === GET_RECIPES) {
    return {
      ...state,
      recipesLoad: action.payload,
    };
  }

  if (action.type === GET_RECIPE_DETAIL) {
    return {
      ...state,
      recipeDetail: action.payload,
    };
  }
 

  if(action.type === GET_NAME_RECIPES){
      return {
          ...state,
          recipesLoad: action.payload
        }
  }

  if (action.type === GET_DIETS) {
    return {
      ...state,
      recipeDiets: action.payload,
    };
  }

  return state;
}
