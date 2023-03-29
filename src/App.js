import React from 'react';
import { useState } from 'react';

const App = () => {
  const [topRight, setTopRight] = useState('X');

  return (
    <div>
      <table>
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
      </table>
    </div>
  );
};

export default App;
