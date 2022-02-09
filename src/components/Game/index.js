import { useState } from "react";
import { calculateWinner } from "../../helper";
import Board from "../Board";
import "./style.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="wrapper">
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        <button id="restart-btn" onClick={restartGame}>
          Restart
        </button>
      </div>
    </>
  );
};

export default Game;
