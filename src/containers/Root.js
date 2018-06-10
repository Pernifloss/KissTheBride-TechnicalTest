import {connect} from "react-redux";
import {withRouter} from 'react-router';
import {push} from 'react-router-redux'
import Main from "../components/Main";
import {getProductsMetadata,getProductsThunk} from "../thunks/products";

export default withRouter(connect((state, props) => ({
    loading: state.getIn(['products','fetchingProducts'])
}),(dispatch, props) => ({
    initialActions(){
        if(props.match.path ==='/'){
            dispatch(push('list'))
        }
        dispatch(getProductsMetadata('')).then(()=>{
            //retrieve first page of products
            dispatch(getProductsThunk())
        })
    }
}))(Main));
