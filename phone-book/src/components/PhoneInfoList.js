import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
	render(){
		const { data } = this.props;
		const list = data.map(
			info => (<PhoneInfo key={info.id} info={info} />)
		);
		return (
			<div>{list}</div>
		);
	}
}

PhoneInfo.defaultProps = {
	data:[]
}
export default PhoneInfoList;
