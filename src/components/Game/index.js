import React from "react";
import Board from "../Board";

const initialState = [null, null, null, null, null, null, null, null, null];

const Game = () => {
  const [board, setBoard] = React.useState(initialState);
  const [xTurn, setxTurn] = React.useState(true);
  const [winner, setWinner] = React.useState(null);

  //(board[index] = "X")
  function makeAMove(index) {
    if (board[index] === null && winner === null) {
      xTurn ? (board[index] = "X") : (board[index] = "O")
        // ? setBoard([...board.slice(0, index), "X", ...board.slice(index + 1)])
        // : setBoard([...board.slice(0, index), "O", ...board.slice(index + 1)]);
      setxTurn(!xTurn);
    }
    if (winner === null) {
      if (board[0] !== null) {
        if (board[0] === board[1] && board[0] === board[2]) {
          setWinner(xTurn);
        }
        if (board[0] === board[3] && board[0] === board[6]) {
          setWinner(xTurn);
        }
      }
      if (board[8] !== null) {
        if (board[8] === board[7] && board[8] === board[6]) {
          setWinner(xTurn);
        }
        if (board[8] === board[5] && board[8] === board[2]) {
          setWinner(xTurn);
        }
      }
      if (board[4] !== null) {
        if (board[1] === board[4] && board[1] === board[7]) {
          setWinner(xTurn);
        }
        if (board[3] === board[4] && board[3] === board[5]) {
          setWinner(xTurn);
        }
        if (board[0] === board[4] && board[0] === board[8]) {
          setWinner(xTurn);
        }
        if (board[2] === board[4] && board[2] === board[6]) {
          setWinner(xTurn);
        }
      }
    }
  }

  function restart() {
    setBoard(Array(9).fill(null));
    setxTurn(true);
    setWinner(null);
  }

  console.log(board);
  return (
    <div>
      <Board board={board} move={makeAMove} />
      <br />
      {xTurn ? <p>Player X is your turn</p> : <p>Player O is your turn</p>}
      {winner === false ? (
        <p>Winner is O</p>
      ) : winner === true ? (
        <p>Winner is X</p>
      ) : (
        <p>No winner yet</p>
      )}
      <button onClick={restart}>Restart Game</button>
    </div>
  );
};

export default Game;
