
import {combineReducers} from "redux-immutable";
import { routerReducer as router } from 'react-router-redux';
import products from "./products";
import pagination from "./pagination";
import search from "./search";
import brands from "./brands";
import categories from "./categories";
import createProduct from "./createProduct";

const rootReducer = combineReducers({
  router, products, pagination, search, brands, categories, createProduct
});

export default rootReducer;
