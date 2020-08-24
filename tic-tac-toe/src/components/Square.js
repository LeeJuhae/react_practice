import React from 'react';

class Square extends React.Component {
	onClick = () => {
		this.props.onClick(this.props.idx);
	}
	render() {
		return (
			<button
			className="square"
			onClick={this.onClick}>
			{this.props.value}
			</button>
		);
	}
}

export default Square;
