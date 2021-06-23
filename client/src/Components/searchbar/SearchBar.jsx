import styles from "./SearchBar.module.css";
import { getNameRecipe } from "../../redux/actions";
import { useState} from "react";
import { useHistory } from "react-router";
import {useDispatch} from "react-redux";
import { FcSearch } from "react-icons/fc";

export default function SearchBar() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(recipes){
      history.push("/recipes?name=" + recipes)
      dispatch(getNameRecipe(recipes))
      setRecipes("")
    }else{
      alert('ingrese una receta')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label className={styles.text}>Name: </label>
        <input className={styles.searchInput}type="Text" value={recipes} onChange={(e) => setRecipes(e.target.value)}/>
        <button onClick={handleSubmit} className={styles.searchButton}>
          <FcSearch size={20}/>
        </button>
      </div>
    </div>
  );
}
