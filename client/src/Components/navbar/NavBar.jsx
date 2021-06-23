import SearchBar from "../searchbar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../img/navbar.png";

export default function NabVar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/home">
        <img src={Logo} alt="logo" height={60} className={styles.logo}/>
      </Link>
      <SearchBar />
      

      <div className={styles.menu}>
        <Link to="/createRecipe">
          <div className={styles.buttonMenu}>
            <p className={styles.paragraph}>Create recipe</p>
          </div>
        </Link>
        <Link to="/recipes">
          <div className={styles.buttonMenu}>
            <p className={styles.paragraph}>View Recipes</p>
          </div>
        </Link>
        <Link  to="/about">
          <div className={styles.buttonMenu}>
            <p className={styles.paragraph}>About</p>
          </div>
        </Link>
        <Link  to="/">
        <div className={styles.buttonMenu}>
            <p className={styles.paragraph}>Exit</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
