import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import board from './gameBoard';
import Square from './Square';
// import checkForWinner from './winner';

const App = () => {
  const [topLeft, setTopLeft] = useState('');
  const [topCenter, setTopCenter] = useState('');
  const [topRight, setTopRight] = useState('');
  const [middleLeft, setMiddleLeft] = useState('');
  const [middleCenter, setMiddleCenter] = useState('');
  const [middleRight, setMiddleRight] = useState('');
  const [bottomLeft, setBottomLeft] = useState('');
  const [bottomCenter, setBottomCenter] = useState('');
  const [bottomRight, setBottomRight] = useState('');
  const [playerTurn, setPlayerTurn] = useState('X');

  const [gameBoard, setGameBoard] = useState(board);

  useEffect(() => {
    if (topLeft === 'X' && topCenter === 'X' && topRight === 'X') {
      console.log('win');
    } else if (
      middleLeft === 'X' &&
      middleCenter === 'X' &&
      middleRight === 'X'
    ) {
      console.log('win');
    }
  });

  const playerMove = (gameBox, setGame) => {
    if (playerTurn === 'X' && gameBox === '') {
      setGame('X');
      setPlayerTurn('O');
    } else if (playerTurn === 'O' && gameBox === '') {
      setGame('O');
      setPlayerTurn('X');
    }
  };

  return (
    <div>
      <div className="game-container">
        {/* {board.map((item, index) => {
          return <Square item={item} />;
        })} */}

        <div className="game-board-row">
          <span>
            <button
              onClick={() => playerMove(topLeft, setTopLeft)}
              className="top-square left-square"
            >
              {topLeft}
            </button>
          </span>
          <span>
            <button
              onClick={() => playerMove(topCenter, setTopCenter)}
              className="top-square"
            >
              {topCenter}
            </button>
          </span>
          <span>
            <button
              onClick={() => playerMove(topRight, setTopRight)}
              className="top-square right-square "
            >
              {topRight}
            </button>
          </span>
        </div>

        <div className="game-board-row">
          <span>
            <button
              onClick={() => playerMove(middleLeft, setMiddleLeft)}
              className="left-square"
            >
              {middleLeft}
            </button>
          </span>
          <span>
            <button onClick={() => playerMove(middleCenter, setMiddleCenter)}>
              {middleCenter}
            </button>
          </span>
          <span>
            <button
              onClick={() => playerMove(middleRight, setMiddleRight)}
              className="right-square "
            >
              {middleRight}
            </button>
          </span>
        </div>

        <div className="game-board-row">
          <span>
            <button
              onClick={() => playerMove(bottomLeft, setBottomLeft)}
              className="left-square bottom-square"
            >
              {bottomLeft}
            </button>
          </span>
          <span>
            <button
              onClick={() => playerMove(bottomCenter, setBottomCenter)}
              className="bottom-square"
            >
              {bottomCenter}
            </button>
          </span>
          <span>
            <button
              onClick={() => playerMove(bottomRight, setBottomRight)}
              className="bottom-square right-square "
            >
              {bottomRight}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
