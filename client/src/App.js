import "./App.css";
import Home from "./Pages/home/Home";
import LandingPage from "./Pages/landigpage/LandingPage.jsx";
import About from "./Pages/about/About.jsx";
import NavBar from "./Components/navbar/NavBar";
import DietTypes from './Pages/dietTypes/DietTypes'
import { Switch, Route } from "react-router-dom";
import CreateRecipe from "./Pages/createRecipe/CreateRecipe";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/">
          <NavBar/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/types" component={DietTypes}/>
          <Route exact path ="/createRecipe" component={CreateRecipe}/>

        </Route>

      </Switch>
    </div>
  );
}

export default App;
