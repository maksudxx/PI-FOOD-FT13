import InfoHome from '../../infohome/InfoHome';
import styles from './home.module.css';

export default function Home(){
    return(
        <div>
            <h1 className={styles.title}>HOME</h1>
            <InfoHome/>
        </div>
    )
}