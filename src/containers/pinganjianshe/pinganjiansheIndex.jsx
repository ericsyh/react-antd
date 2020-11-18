import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class pinganjianshe extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (	
		<div>
			<Row>
				<Col span={20}>
                    <img height="4429" width="1350" src="http://pontt9qvy.bkt.clouddn.com/%E5%B9%B3%E5%AE%89%E5%BB%BA%E8%AE%BE-new.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default pinganjianshe;
