import styles from './LandingPage.module.css';
import {Link} from 'react-router-dom'


export default function LandingPage(){
    return(  
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Food APP ♥</h1>
            <Link  exact to={'/home'}>
                <div className={styles.button}>Enter</div>
            </Link>
            
        </div>
        
    )
}