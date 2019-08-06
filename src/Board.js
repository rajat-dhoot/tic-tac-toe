import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, isXNext, winner, handleClick, moves }) => {
   const renderSquare = i => {
      return <Square value={squares[i]} onClick={() => handleClick(i)} />;
   };
   let status;
   if (winner) {
      status = `Player ${winner} won`;
   } else if (moves < 9) {
      status = `Player ${isXNext ? "X" : "0"} turn`;
   } else status = `Match Draw`;
   return (
      <div className="board">
         <div className="status">{status}</div>
         <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
         </div>
         <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
         </div>
         <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
         </div>
      </div>
   );
};

export default Board;
