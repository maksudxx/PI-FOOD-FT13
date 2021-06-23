import { useState, useEffect } from "react";
export default function CreateRecipe() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    name :'',
    
  });

  const dataJson = async () => {
    try {
      const response = await fetch("http://localhost:3001/types");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };



  return (
    <div>
      <h3>Create a new Recipe</h3>
      <form action="">
        <input type="text" placeholder="name..." /> <br />
        <input type="text" placeholder="Summary..." />
        <br />
        <input type="text" placeholder="score..." /> <br />
        <input type="text" placeholder="healtScore..." />
        <br />
        <input type="text" placeholder="instructions..." /> <br />
        <input type="text" placeholder="image..." /> <br />
      </form>
    </div>
  );
}
