import SearchBar from "../searchbar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../img/navbar.png";

export default function NabVar() {
  return (
    <nav className={styles.navBar}>
      <SearchBar />
      <Link to="/home">
        <img src={Logo} alt="logo" height={60}/>
      </Link>

      <div className={styles.menu}>
        <Link to="/createRecipe">
          <div className={styles.buttonMenu}>
            <p className={styles.paragraph}>Create recipe</p>
          </div>
        </Link>
        <Link to="/types">
          <div className={styles.buttonMenu}>
            <p className={styles.paragraph}>Diet Types</p>
          </div>
        </Link>
        <Link  to="/about">
          <div className={styles.buttonMenu}>
            <p className={styles.paragraph}>About</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
