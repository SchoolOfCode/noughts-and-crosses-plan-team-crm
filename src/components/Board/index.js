import React from "react";
import Square from "../Square";
import "./style.css";

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;
