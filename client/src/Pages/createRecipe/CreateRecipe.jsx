import axios from "../../axios";
import styles from "./CreateRecipe.module.css";
import { useState, useEffect } from "react";
export default function CreateRecipe() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    name: "",
    summary: "",
    score: "",
    healtScore: "",
    instructions: "",
    image: "",
    diets: [],
  });

  // const dataJson = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/types");
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  async function getDiets() {
    try {
      const response = await axios({
        url: "http://localhost:3001/types",
        method: "GET",
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create a new Recipe</h3>
      <form action="" className={styles.formRecipe}>
        <div className={styles.info}>
          <input
            type="text"
            name="name"
            placeholder="name..."
            onChange={handleInputChange}
            value={input.name}
          />
          <br />
          <br />
          <input
            type="text"
            name="summary"
            placeholder="Summary..."
            onChange={handleInputChange}
            value={input.summary}
          />
          <br />
          <br />
          <input
            type="number"
            name="score"
            placeholder="score..."
            onChange={handleInputChange}
            value={input.score}
          />
          <br />
          <br />
          <input
            type="number"
            name="healtScore"
            placeholder="healtScore..."
            onChange={handleInputChange}
            value={input.healtScore}
          />
          <br />
          <br />
          <input
            type="text"
            name="instructions"
            placeholder="instructions..."
            onChange={handleInputChange}
            value={input.instructions}
          />
          <br />
          <br />
          <input
            type="text"
            name="image"
            placeholder="image..."
            onChange={handleInputChange}
            value={input.image}
          />
          <br />
          <br />
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
}
