import {connect} from "react-redux";
import ProductList from "../components/ProductList";
import {selectProductForCurrentPage} from "../selectors/products";

export default connect((state, props) => ({
    products : selectProductForCurrentPage(state)
}),(dispatch, props) => ({
}))(ProductList);
