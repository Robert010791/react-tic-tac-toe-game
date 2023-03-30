import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [topRight, setTopRight] = useState('X');

  return (
    <div>
      <div className="game-container">
        <div className="game-board-row">
          <span>
            <button className="top-square left-square">{topRight}</button>
          </span>
          <span>
            <button className="top-square">{topRight}</button>
          </span>
          <span>
            <button className="top-square right-square ">{topRight}</button>
          </span>
        </div>

        <div className="game-board-row">
          <span>
            <button className="left-square">{topRight}</button>
          </span>
          <span>
            <button>{topRight}</button>
          </span>
          <span>
            <button className="right-square ">{topRight}</button>
          </span>
        </div>

        <div className="game-board-row">
          <span>
            <button className="left-square bottom-square">{topRight}</button>
          </span>
          <span>
            <button className="bottom-square">{topRight}</button>
          </span>
          <span>
            <button className="bottom-square right-square ">{topRight}</button>
          </span>
        </div>

        {/* <table>
          <tbody>
            <tr>
              <td>
                <button>{topRight}</button>
              </td>
              <td>
                <button>{topRight}</button>
              </td>
              <td>
                <button>{topRight}</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>{topRight}</button>
              </td>
              <td>
                <button>{topRight}</button>
              </td>
              <td>
                <button>{topRight}</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>{topRight}</button>
              </td>
              <td>
                <button>{topRight}</button>
              </td>
              <td>
                <button>{topRight}</button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default App;
