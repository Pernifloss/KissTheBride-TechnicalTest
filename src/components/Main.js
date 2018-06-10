import React from 'react';
import {Spin} from 'antd';
import '../../assets/grid.less'
import ProductList from "../containers/ProductList";
import ProductSearch from "../containers/ProductSearch";

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
