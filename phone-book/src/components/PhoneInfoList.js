import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
	render(){
		const { data, onRemove, onUpdate } = this.props;
		const list = data.map(
			info => (
			<PhoneInfo
				key={info.id}
				info={info}
				onRemove={onRemove}
				onUpdate={onUpdate}
			/>)
		);
		return (
			<div>{list}</div>
		);
	}
}

PhoneInfo.defaultProps = {
	data:[],
	onRemove: () => console.warn('onRemove not defined'),
	onUpdate: () => console.warn('onUpdate not defined')
}
export default PhoneInfoList;
