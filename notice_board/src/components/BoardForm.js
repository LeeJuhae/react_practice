import React from 'react';

class BoardForm extends React.Component {
	state = {}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault(); // 서버로 보낼 것이 아니기 때문에 이벤트를 중지한다.
		this.props.onSaveData(this.state);
		// this.setState({});
	}
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input
				placeholder="title"
				name="brdtitle"
				onChange={this.handleChange}/>
				<input
				placeholder="writer"
				name="brdwriter"
				onChange={this.handleChange}/>
				<button type="submit">Save</button>
			</form>
		);
	}
	// state = {
	// 	title: '',
	// 	writer: '',
	// }
	// handleChange = (e) => {
	// 	this.setState({
	// 		[e.target.name]: e.target.value,
	// 	})
	// }
	// render(){
	// 	// const {title, writer} = this.state;
	// 	return (
	// 		<form>
	// 			<input
	// 			placeholder="title"
	// 			name="title"
	// 			onChange={this.handleChange}/>
	// 			<input
	// 			placeholder="writer"
	// 			name="writer"
	// 			onChange={this.handleChange}/>
	// 			<button
	// 			type="submit"
	// 			onClick={this.handleClick}>추가</button>
	// 		</form>
	// 	);
	// }
}
export default BoardForm;
