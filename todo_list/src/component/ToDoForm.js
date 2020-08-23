import React from 'react';

class ToDoForm extends React.Component {
	state = {
    text: '',
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onCreate(this.state);
		this.setState({
			text:'',
		});
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	render () {
		const {text} = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input value={text} name="text"
					placeholder="입력" onChange={this.handleChange}></input>
					<button type="submit">추가</button>
				</form>
			</div>
		);
	}
}

export default ToDoForm;
