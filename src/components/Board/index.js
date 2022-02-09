import React from "react";
import Square from "../Square";
import "./style.css";

const Board = ({ board, move }) => {
  return (
    <div className="board">
      {board.map((element, index) => {
        return <Square sign={element} move={move} i={index} />;
      })}
    </div>
  );
};

export default Board;
