import React from 'react';
import { Table , Avatar } from 'antd';
import {Switch, Route} from 'react-router';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.columns = [{
            title : 'Product Name',
            key : 'name',
            dataIndex: 'name',
        },{
            title : 'Description',
            key : 'description',
            dataIndex: 'description',
        },{
            title : 'Image',
            key : 'image',
            render:(record)=>   <Avatar shape="square" size="big" src={record.image}  />
        }]
    }
    componentDidMount(){
        this.props.initialActions()
    }
    render() {

        return (
          <Table
            dataSource={this.props.products}
            columns={this.columns}
          />
        );
    }
}

ProductList.propTypes = {
    initialActions : PropTypes.func

};

export default ProductList;
