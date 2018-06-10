import {connect} from "react-redux";
import ProductPagination from "../components/ProductPagination";
import {getProductsThunk} from "../thunks/products";
import {setCurrentPage} from "../actions/pagination";

export default connect((state, props) => ({
    pageSize: state.getIn(['pagination', 'pageSize']),
    currentPage: state.getIn(['pagination', 'currentPage']),
    count: state.getIn(['pagination', 'count']),
    fetchingProductsMetadata: state.getIn(['pagination', 'fetchingProductsMetadata']),

}), (dispatch, props) => ({
    changePage(page){
        dispatch(setCurrentPage(page-1));
        dispatch(getProductsThunk())
    }
}))(ProductPagination);
