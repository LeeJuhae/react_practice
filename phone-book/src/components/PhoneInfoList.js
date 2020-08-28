import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
	render(){
		const { data, onRemove } = this.props;
		const list = data.map(
			info => (
			<PhoneInfo
				key={info.id}
				info={info}
				onRemove={onRemove}
			/>)
		);
		return (
			<div>{list}</div>
		);
	}
}

PhoneInfo.defaultProps = {
	data:[],
	onRemove: () => console.warn('onRemove not defined')
}
export default PhoneInfoList;
