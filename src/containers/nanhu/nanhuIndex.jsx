import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class nanhu extends Component {
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
				<Col span={20} className="mg-top20">
					<img height="2879" width="1622" src="http://pontt9qvy.bkt.clouddn.com/%E5%98%89%E5%85%B4%E5%B8%82%E5%8D%97%E6%B9%96%E5%8C%BA%E5%8D%97%E6%B9%96%E8%A1%97%E9%81%93%E5%8D%97%E6%B9%96%E7%A4%BE%E5%8C%BA%E8%87%AA%E6%B2%BB%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default nanhu;
