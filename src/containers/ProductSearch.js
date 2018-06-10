import {connect} from "react-redux";
import ProductSearch from "../components/ProductSearch";
import {getProductsMetadata, getProductsThunk} from "../thunks/products";
import {setSearchQuery} from "../actions/search";

export default connect((state, props) => ({

}),(dispatch, props) => ({
    onSearch(search){
        dispatch(setSearchQuery(search))
        dispatch(getProductsMetadata(search)).then(()=>{
            dispatch(getProductsThunk())
        })
    }
}))(ProductSearch);
