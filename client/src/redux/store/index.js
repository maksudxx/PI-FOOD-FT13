import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) //este permite hacer las actions asincronicas desde el servidor de la api
);
export default store;