import React from 'react';
import { Button ,Spin} from 'antd';
import {Switch, Route} from 'react-router';
import {Link} from "react-router-dom";
import '../../assets/grid.less'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
componentDidMount(){
    this.props.initialActions()
}
    render() {

        return (
            <div>

                <Spin >
                <div className="header">
                    <Button size="large" >Header Button</Button>

                </div>

                <div className="row">



                </div>
                </Spin>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;
