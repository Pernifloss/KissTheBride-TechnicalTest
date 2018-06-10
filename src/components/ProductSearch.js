import React from 'react';
import {Input,Icon} from 'antd';
import ProductPagination  from '../containers/ProductPagination'
import PropTypes from 'prop-types';

class ProductList extends React.Component {
      render() {
        return (
            <div style={{height:"32px"}} >
                <Input.Search
                    placeholder="input search text"
                    onSearch={value => this.props.onSearch(value)}
                    enterButton
                />
            </div>
        );
    }
}

ProductList.propTypes = {
    onSearch : PropTypes.func
};

export default ProductList;
