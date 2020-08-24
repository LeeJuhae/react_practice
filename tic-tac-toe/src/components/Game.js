import React from 'react';
import Board from './Board';

function getWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0 ; i < lines.length ; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] &&
			squares[a] === squares[c])
			return squares[a];
	}
	return null;
}
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
		const winner = getWinner(squares)

		if (winner || squares[i])
			return ;
		squares[i] = this.state.xIsNext ? 'x' : 'o';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
		});
	}
	render() {
		const {squares, xIsNext} = this.state;
		let status;
		const winner = getWinner(squares);
		if (winner) {
			status = 'Winner : ' + winner;
		} else {
			status = 'Next Player: ' + (xIsNext? 'x' : 'o');
		}
		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={this.state.squares}
						onClick={this.handleClick} />
				</div>
				<div className="game-info">
					<div className="status">{status}</div>
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
