import React from 'react';

class BoardItem extends React.Component {
	// handleSelectRow = ()
	handleRemove = () => {
		const {row, onRemove} = this.props;
		onRemove(row.brdno);
	}
	render () {
		const {brdno, brdtitle, brdwriter, brddate} = this.props.row;
		return (
			<tr>
				<td>{brdno}</td>
				{/* <td><a onClick={this.handleSelectRow}>{brdtitle}</a></td> */}
				<td>{brdtitle}</td>
				<td>{brdwriter}</td>
				<td>{brddate.toLocaleDateString('ko-KR')}</td>
				<td><button onClick={this.handleRemove}>X</button></td>
			</tr>
		);
	}
}

export default BoardItem;
