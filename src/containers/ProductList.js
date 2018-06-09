import {connect} from "react-redux";
import {withRouter} from 'react-router';
import ProductList from "../components/ProductList";
import {push} from "react-router-redux"
import {getProductsThunk} from "../thunks/products";

export default withRouter(connect((state, props) => ({
    products : state.getIn(['products','products']).toJS()
}),(dispatch, props) => ({
    initialActions(){
        dispatch(getProductsThunk())

    }
}))(ProductList));
