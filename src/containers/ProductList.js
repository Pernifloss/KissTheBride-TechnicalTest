import {connect} from "react-redux";
import {withRouter} from 'react-router';
import ProductList from "../components/ProductList";
import {selectProductForCurrentPage} from "../selectors/products";

export default withRouter(connect((state, props) => ({
    products : selectProductForCurrentPage(state)
}),(dispatch, props) => ({
}))(ProductList));
