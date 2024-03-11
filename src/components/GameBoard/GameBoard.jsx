import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    /* Not recommended approach. It's better to update
     Object-State Immutably (objects, arrays) as you would 
     update the value you change immediately without waiting 
     for the scheduler to operate and will have side effects 
     or strange bugs */
    // setGameBoard((prevGameBoard) => {
    //   prevGameBoard[rowIndex, colIndex] = 'X'
    //   return prevGameBoard
    // })
    /* Recommended approach: Use the spread operator to create a shallow copy */
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() =>
                    handleSelectSquare(rowIndex, colIndex)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
