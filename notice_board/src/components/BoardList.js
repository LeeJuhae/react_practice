import React from 'react';

class BoardList extends React.Component {
	render () {
		const {brdno, brdtitle, brdwriter, brddate} = this.props.row;
		return (
			<tr>
				<td>{brdno}</td>
				<td>{brdtitle}</td>
				<td>{brdwriter}</td>
				<td>{brddate.toLocaleDateString('ko-KR')}</td>
			</tr>
		);
	}
}

export default BoardList;
