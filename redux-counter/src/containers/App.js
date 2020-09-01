import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';
import { getRandomColor } from '../utils';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
	render(){
		const { onCreate, onRemove } = this.props;
		return (
			<div>
				<Buttons onCreate={onCreate} onRemove={onRemove} />
				<CounterListContainer/>
			</div>
		);
	}
}

const mapToDispatch = (dispatch) => ({
	onCreate: () => dispatch(actions.create(getRandomColor())),
	onRemove: (index) => dispatch(actions.remove(index))
})

export default connect(null, mapToDispatch)(App);
