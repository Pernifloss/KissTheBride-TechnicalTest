
import {combineReducers} from "redux-immutable";
import { routerReducer as router } from 'react-router-redux';
import products from "./products";
import pagination from "./pagination";
import search from "./search";

const rootReducer = combineReducers({
  router, products, pagination, search
});

export default rootReducer;
