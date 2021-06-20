import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
export default function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label className={styles.text}>Name: </label>
        <input type="Text" />
        <Link to={"/recipes"}>
          <div className={styles.buttonSearch}>Search</div>
        </Link>
      </div>
    </div>
  );
}
