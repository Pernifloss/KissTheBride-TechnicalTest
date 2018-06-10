import React from 'react';
import {Card, Avatar, Spin} from 'antd';
import ProductPagination  from '../containers/ProductPagination'
import PropTypes from 'prop-types';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {products} = this.props;
        return (
            <div>

                {products ? products.map((product) =>
                    <div className="row" key={product.id}>
                        <Card title={product.name}>
                            <div className="col-10">{product.description}
                                <div className="row">
                                    {product.brand ? product.brand.name : ''}
                                </div>
                                <div className="row">

                                    {product.categories.map((category, num) =>
                                        <span key={category.id}>{num !== 0 ? '/' : ''} {category.name} </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-2"><Avatar shape="square" size="big" src={product.image}/></div>
                        </Card>
                    </div>
                ) : <Spin/>}

                <ProductPagination/>
            </div>
        );
    }
}

ProductList.propTypes = {
    initialActions: PropTypes.func,
    products: PropTypes.array
};

export default ProductList;
