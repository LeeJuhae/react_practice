import React from 'react';
import Board from './Board';

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		}
	}
	handleClick = (i) => {
		const squares = this.state.squares.slice();
		squares[i] = this.state.xIsNext ? 'x' : 'o';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
		});
	}
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={this.state.squares}
						onClick={this.handleClick} />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
