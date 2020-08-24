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
			history: [{
				squares: Array(9).fill(null),
			}],
			xIsNext: true,
			step: 0,
		}
	}
	handleClick = (i) => {
		const history = this.state.history.slice(0, this.state.step + 1);
		const current = history[history.length-1];
		const squares = current.squares.slice();
		const winner = getWinner(squares)
		if (winner || squares[i])
			return ;
		squares[i] = this.state.xIsNext ? 'x' : 'o';
		this.setState({
			history: history.concat({
				squares:squares,
			}),
			xIsNext: !this.state.xIsNext,
			step: history.length,
		});
	}
	jumpTo(step) {
		this.setState({
			step: step,
			xIsNext: (step % 2) === 0,
		});
	}
	render() {
		const {history, xIsNext, step} = this.state;
		const current = history[step];
		const winner = getWinner(current.squares);
		const moves = history.map((move, step) => {
			const description = step ?
			'Go to move #' + step : 'Go to game start';
			return (
			<li key={step}>
				<button onClick={() => this.jumpTo(step)}>{description}</button>
			</li>);
		})
		let status;
		if (winner) {
			status = 'Winner : ' + winner;
		} else {
			status = 'Next Player: ' + (xIsNext? 'x' : 'o');
		}
		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={current.squares}
						onClick={this.handleClick} />
				</div>
				<div className="game-info">
					<div className="status">{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
