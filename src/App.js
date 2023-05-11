import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import SquarePiece from './SquarePiece';

const App = () => {
  const [gameBoard, setGameBoard] = useState([
    ['X', 'X', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X'],
  ]);

  // ['X', 'X', 'X'],
  // ['O', 'X', 'O'],
  // ['X', 'O', 'X'],

  // ['', '', ''],
  // ['', '', ''],
  // ['', '', ''],

  const playerTurn = (name) => {
    console.log(name);
  };

  return (
    <>
      <div className="game-board">
        <div className="row">
          {gameBoard[0].map((item, index) => {
            return (
              <button
                // name={index}
                onClick={() => playerTurn(index)}
                className="square-button"
              >
                {item[0]}
              </button>
            );
          })}
        </div>
        <div className="row">
          {gameBoard[1].map((item, index) => {
            index += 2;
            return (
              <button
                onClick={() => playerTurn(index)}
                className="square-button"
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="row">
          {gameBoard[2].map((item) => {
            return <button className="square-button">{item}</button>;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
