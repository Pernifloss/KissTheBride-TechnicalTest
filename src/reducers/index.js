
import {combineReducers} from "redux-immutable";
import { routerReducer as router } from 'react-router-redux';
import products from "./products";

const rootReducer = combineReducers({
  router, products
});

export default rootReducer;
