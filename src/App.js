import React, { Component } from "react";
import "./App.css";
import Board from "./Board";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         history: [{ squares: Array(9).fill(null) }],
         isXNext: true
      };
   }

   handleClick = i => {
      const { history, isXNext } = this.state;
      const squares = history[history.length - 1].squares;
      if (calculateWinner(squares) || squares[i]) return;
      const square = [...squares];
      square[i] = isXNext ? "X" : "0";
      this.setState({
         history: [...this.state.history, { squares: square }],
         isXNext: !isXNext
      });
   };

   handleReset = () => {
      this.setState({
         history: [this.state.history[0]],
         isXNext: true
      });
   };

   handleUndo = () => {
      const { history } = this.state;
      history.length > 1 &&
         this.setState({
            history: history.slice(0, history.length - 1),
            isXNext: !this.state.isXNext
         });
   };

   render() {
      const { history, isXNext } = this.state;
      const squares = history[history.length - 1].squares;
      return (
         <div className="container">
            <header>Tic Tac Toe</header>
            <hr />
            <div className="game-row">
               <section className="play-game">
                  <Board
                     squares={squares}
                     isXNext={isXNext}
                     winner={calculateWinner(squares)}
                     moves={history.length - 1}
                     handleClick={this.handleClick}
                  />
               </section>
               <section className="details">
                  <button className="undo" onClick={this.handleUndo}>
                     Undo
                  </button>
                  <button className="reset" onClick={this.handleReset}>
                     Reset
                  </button>
               </section>
            </div>
         </div>
      );
   }
}

function calculateWinner(squares) {
   const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];
   for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (
         squares[a] &&
         squares[b] === squares[a] &&
         squares[a] === squares[c]
      ) {
         return squares[a];
      }
   }
   return null;
}

export default App;
