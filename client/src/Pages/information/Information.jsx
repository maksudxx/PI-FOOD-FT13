import {useParams} from 'react-router'
import {useEffect} from 'react'
import { getRecipeDetail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Information.module.css'
import {Link} from 'react-router-dom'
import Back from '../../img/back.png'


export default function Information(){
    
    const recipesInformation = useSelector((state) => state.recipeDetail);
    const dispatch = useDispatch();
    console.log(recipesInformation);

    console.log(typeof recipesInformation === 'object')

    const id = useParams();

    useEffect(()=>{
        dispatch(getRecipeDetail(id.id))  //al llamarlo con use params se lo accede asi porque llega como objeto y hay que acceder a la propiedad
    },[dispatch,id.id])

   
    return(
        <div>
            
            <div className={styles.component}>
            <Link to={'/recipes'}>
                <img src={Back} alt="back" className={styles.image} />
            </Link>
            <h3>INFORMATION</h3>
            <div className={styles.content}>
                <p><strong>RECIPE: </strong>{recipesInformation.name}</p>
                <p><strong>SUMMARY: </strong>{recipesInformation.summary}</p>
                <p><strong>SCORE: </strong>{recipesInformation.score}</p>
                <p><strong>HEALTSCORE: </strong> {recipesInformation.healthScore}</p>
                <p><strong>INSTRUCTIONS: </strong>{recipesInformation.instructions}</p>
            </div>
            
            </div>
        </div>
    )
}