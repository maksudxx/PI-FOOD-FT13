import { getRecipes } from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../Components/cards/Card";
import styles from "./Recipes.module.css";
export default function Home() {
  const recipesLoad = useSelector((state) => state.recipesLoad);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (recipesLoad) {
    return (
      <div>
        <h1 className={styles.title}>Recipes</h1>
        <div>
          <button>Back</button>
          <button>Next</button>
        </div>
        <ul className={styles.recipesGrid}>
        {recipesLoad.map((recipe) => (
          <Card
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            diet={JSON.parse(recipe.diet)}
          />
        ))}
      </ul>
      </div>
      
    );
  } 
}
