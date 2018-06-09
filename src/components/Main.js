import React from 'react';
import {Button, Spin} from 'antd';
import {Switch, Route} from 'react-router';
import {Link} from "react-router-dom";
import '../../assets/grid.less'
import ProductList from "../containers/ProductList";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>

                <Spin spinning={this.props.loading}>
                    <div className="header">
                        Product List
                    </div>

                    <div className="row">

                        <div className="col-3">
                            Menu
                        </div>

                        <div className="col-9">
                            <ProductList/>
                        </div>

                    </div>
                </Spin>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;
