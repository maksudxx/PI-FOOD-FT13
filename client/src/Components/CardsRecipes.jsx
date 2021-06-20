import CardRecipe from './CardRecipe'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import {getRecipes} from '../redux/actions/index'

export default function CardsRecipes(){
    // const dispatch = useDispatch();
    // let {recipes} = useSelector((state)=>state)
    // console.log(recipes)
    // useEffect(()=>{
    //     dispatch(getRecipes())
    // }, [dispatch])
    // return(
    //     <div>
    //         {recipes.map((rec, index)=>{
    //             <CardRecipe key={index} id= {rec.id} name={rec.name} summary={rec.summary}/>
    //         })}
    //     </div>
    // )
}