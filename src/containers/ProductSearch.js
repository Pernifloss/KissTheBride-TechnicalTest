import {connect} from "react-redux";
import {withRouter} from 'react-router';
import ProductSearch from "../components/ProductSearch";
import {getProductsMetadata, getProductsThunk} from "../thunks/products";
import {setSearchQuery} from "../actions/search";

export default withRouter(connect((state, props) => ({

}),(dispatch, props) => ({
    onSearch(search){
        dispatch(setSearchQuery(search))
        dispatch(getProductsMetadata(search)).then(()=>{
            //retrieve first page of products
            dispatch(getProductsThunk())
        })
    }
}))(ProductSearch));
