import {connect} from "react-redux";
import {withRouter} from 'react-router';
import Main from "../components/Main";
import {getProductsMetadata,getProductsThunk} from "../thunks/products";

export default withRouter(connect((state, props) => ({
    loading: state.getIn(['products','fetchingProducts'])
}),(dispatch, props) => ({
    initialActions(){
        dispatch(getProductsMetadata('')).then(()=>{
            //retrieve first page of products
            dispatch(getProductsThunk())
        })
    }
}))(Main));
