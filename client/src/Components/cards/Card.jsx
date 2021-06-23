import styles from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card({name, image, diet, id}){
    return(
        <Link to={'/recipes/' + id}>
            <li className={styles.card}>
            <img src={image} alt="lalala" width={150} className={styles.img}/>
            <p>{name}</p>
            <p>{diet}</p>
        </li>
        </Link>
        
    )
}