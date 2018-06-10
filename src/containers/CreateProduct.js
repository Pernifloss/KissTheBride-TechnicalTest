import {connect} from "react-redux";
import CreateProduct from "../components/CreateProduct";
import {getCategoriesThunk} from "../thunks/categories";
import {getBrandsThunk} from "../thunks/brands";

export default connect((state, props) => ({
    categories: state.getIn(['categories','categories']),
    fetchingCategories : state.getIn(['categories','fetching']),
    brands: state.getIn(['brands','brands']),
    fetchingBrands : state.getIn(['brands','fetching']),
    creatingProduct : state.getIn(['createProduct','creatingProduct']),
}),(dispatch, props) => ({
    createProduct(product){
        dispatch(createProductThunk(product));
    },
    initialActions(){
        dispatch(getCategoriesThunk());
        dispatch(getBrandsThunk());
    }
}))(CreateProduct);
