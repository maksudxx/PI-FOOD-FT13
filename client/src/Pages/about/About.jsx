import styles from "./About.module.css"
import {Link} from 'react-router-dom'

export default function About(){
    return (
       <div className={styles.container}>
            <div className={styles.about}>Application made in the labs of "SoyHenry" by the student Facundo Maksud.</div>
            <Link to={'/home'}>
                <div className={`${styles.about} ${styles.buttonBack}`}>← Back</div>
            </Link>
            
       </div>
    )
}