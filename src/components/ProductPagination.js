import React from 'react';
import {Pagination, Spin} from 'antd';
class ProductPagination extends React.Component {
    onPageChange(page) {
        this.props.changePage(page)
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {pageSize, currentPage, count, fetchingProductsMetadata} = this.props;
        return (
            <Spin spinning={fetchingProductsMetadata}>
                <Pagination current={currentPage + 1} total={count} pageSize={pageSize}
                            onChange={(page) => this.onPageChange(page)}/>
            </Spin>
        );
    }
}
export default ProductPagination;
