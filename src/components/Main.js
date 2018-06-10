import React from 'react';
import {Spin} from 'antd';
import '../../assets/grid.less'
import ProductList from "../containers/ProductList";
import ProductSearch from "../containers/ProductSearch";

import {Switch, Route} from 'react-router';
import {Link} from "react-router-dom";
import CreateProduct from "../containers/CreateProduct";

class Main extends React.Component {

    componentDidMount() {
        this.props.initialActions()
    }

    render() {

        return (
            <Spin spinning={this.props.loading}>
                <div className="header">
                    <div className="row">
                        <div className="col-3">
                            <ProductSearch />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="row">
                            <Link to="list">Product List</Link>
                        </div>
                        <div className="row">
                            <Link to="create">Create Product</Link>
                        </div>
                    </div>

                    <div className="col-9">
                        <Switch>
                            <Route exact path={"/list"} component={ProductList}/>
                            <Route exact path={"/create"} component={CreateProduct}/>
                        </Switch>
                    </div>

                </div>
            </Spin>
        );
    }
}

Main.propTypes = {};

export default Main;
