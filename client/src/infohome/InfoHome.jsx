import styles from './InfoHome.module.css'

export default function InfoHome(){
    return(
        <div className={styles.info}>
            <p>On this page you will be able to do the following:</p>
            <ul>
                <li>Create a new recipe</li>
                <li>Search Recipes</li>
                <li>See your information</li>
            </ul>
        </div>

    )
}