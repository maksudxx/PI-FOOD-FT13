import axios from '../../axios';
export const GET_RECIPES = 'GET_RECIPES';

export function getRecipes(){
    return function(dispatch){
        return axios.get("/recipes")
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'GET_RECIPES', payload: json});
        })
    }
}


// export function getRecipes(){
//     return function(dispatch){
//         return fetch(`https://localhost:3001/recipes`)
//         // const json = await res.json()
//         // .then(dispatch({type: 'GET_RECIPES', payload: json}))
//         .then(response => response.json())
//         .then(obj => {
//             dispatch({type: 'GET_RECIPES', payload:obj})
//         })
//     }
// }