
import {combineReducers} from "redux-immutable";
import { routerReducer as router } from 'react-router-redux';
import products from "./products";
import pagination from "./pagination";

const rootReducer = combineReducers({
  router, products, pagination
});

export default rootReducer;
