import React from 'react';

class ToDoInfo extends React.Component {
	state = {
	  toggle: false,
	  text: '',
	};
	handleChange = (e) => {
	  this.setState({
		[e.target.name]: e.target.value,
	  });
	}
	handleToggleChange = () => {
	  const {data, onUpdate} = this.props;
	  const {toggle, text} = this.state;
	  if (!toggle) {
		this.setState({
		  text: data.text,
		  toggle: true,
		});
	  } else {
		onUpdate(data.id, {text: text});
		this.setState({
		  toggle: false,
		});
	  }
	}
	handleRemove = () => {
	  const {data, onRemove} = this.props;
	  onRemove(data.id);
	}
	render() {
	  const {data} = this.props;
	  const {toggle, text} = this.state;
	  return (
		<div>
		  {toggle ? (<input onChange={this.handleChange} value={text} name="text"></input>)
		  : (<span>{data.text}</span>)
		  }
		  <button onClick={this.handleToggleChange}>{toggle ? '적용' : '수정'}</button>
		  <button onClick={this.handleRemove}>삭제</button>
		</div>
	  );
	}
  }

export default ToDoInfo;
