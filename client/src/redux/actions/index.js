import axios from '../../axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_DETAIL = 'GET_RECIPES_DETAIL';
export const GET_NAME_RECIPES = 'GET_NAME_RECIPES';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const GET_DIETS = 'GET_DIETS';

export function getRecipes(){
    return function(dispatch){
        return axios.get("/recipes")
        .then(response => response.data)
        .then(json =>{
            dispatch({type: GET_RECIPES, payload: json});
        })
        
    }
}

export function getRecipeDetail(id) {
    return function (dispatch) {
      return axios.get("/recipes/" + id)
        .then(response => response.data)
        .then(json => {
          dispatch({ type: GET_RECIPE_DETAIL, payload: json });
        });
    };
}

export function getNameRecipe(name) {
    return function (dispatch) {
      return axios.get("/recipes?name="+name )
        .then(response => response.data)
        .then(json => {
          dispatch({ type: GET_NAME_RECIPES, payload: json});
        })
    };
}

export function getDiets(){
  return function(dispatch){
      return axios.get("/types")
      .then(response => response.data)
      .then(json =>{
          dispatch({type: GET_DIETS, payload: json});
      })
  }
}

