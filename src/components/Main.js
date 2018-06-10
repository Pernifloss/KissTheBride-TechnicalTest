import React from 'react';
import { Spin } from 'antd';
import '../../assets/grid.less'
import ProductList from "../containers/ProductList";

class Main extends React.Component {

    componentDidMount() {
        this.props.initialActions()
    }

    render() {

        return (
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
        );
    }
}

Main.propTypes = {};

export default Main;
