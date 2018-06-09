
import {combineReducers} from "redux-immutable";
import { routerReducer as router } from 'react-router-redux';

const rootReducer = combineReducers({
  router
});

export default rootReducer;
