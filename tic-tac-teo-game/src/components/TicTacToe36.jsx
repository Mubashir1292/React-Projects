import React, { useEffect, useState } from "react";
import Squar from "./Squar";

function TicTacToe36() {
  const [squares, setSquares] = useState(Array(36).fill(""));
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [message, setMessage] = useState("");
  const [resetButton, setResetButton] = useState(false);
  const handleClick = (boxNumber) => {
    const copySquares = squares;
    if (checkWinner(squares) || copySquares[boxNumber] !== "") return;
    copySquares[boxNumber] = isFirstPlayer ? "X" : "O";
    setSquares(copySquares);
    setIsFirstPlayer((curr) => !curr);
  };
  const checkWinner = (checkedSquares) => {
    const winningPatterns = [
      //rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
      [12, 13, 14],
      [15, 16, 17],
      [18, 19, 20],
      [21, 22, 23],
      [24, 25, 26],
      [27, 28, 29],
      [30, 31, 32],
      [33, 34, 35],
      // cols
      [0, 6, 12],
      [18, 24, 30],
      [1, 7, 13],
      [19, 25, 31],
      [2, 8, 14],
      [20, 26, 32],
      [3, 9, 15],
      [21, 27, 33],
      [4, 10, 16],
      [22, 28, 34],
      [5, 11, 17],
      [23, 29, 35],
      //intersections
      // left to right
      [0, 7, 14],
      [1, 8, 15],
      [2, 9, 16],
      [3, 10, 17],
      [6, 13, 20],
      [7, 14, 21],
      [9, 15, 22],
      [10, 16, 23],
      [12, 19, 26],
      [13, 20, 27],
      [14, 21, 28],
      [15, 22, 29],
      [18, 25, 32],
      [19, 26, 33],
      [20, 27, 34],
      [21, 28, 35],
      // right to left
      [5, 10, 15],
      [4, 9, 14],
      [3, 8, 13],
      [2, 7, 12],
      [11, 16, 21],
      [10, 15, 20],
      [9, 14, 19],
      [8, 13, 18],
      [17, 22, 27],
      [16, 21, 27],
      [15, 20, 25],
      [14, 19, 24],
      [23, 28, 33],
      [22, 27, 32],
      [21, 26, 31],
      [20, 25, 30],
    ];
    // 0,1,2,3,4,5
    // 6,7,8,9,10,11
    // 12,13,14,15,16,17,
    // 18,19,20,21,22,23
    // 24,25,26,27,28,29,
    // 30,31,32,33,34,35
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        checkedSquares[x] &&
        checkedSquares[x] === checkedSquares[y] &&
        checkedSquares[x] === checkedSquares[z]
      ) {
        setResetButton(true);
        return checkedSquares[x];
      }
    }
    return null;
  };
  useEffect(() => {
    if (checkWinner(squares) || squares.every((item) => item !== "")) {
      setMessage("This Game is Draw ! Please Restart the Game ");
    } else if (checkWinner(squares)) {
      setMessage(`Winner of This Game is ${checkWinner(squares)}`);
    } else {
      setMessage(`Next Player is ${isFirstPlayer ? "X" : "O"}`);
    }
  }, [squares, isFirstPlayer]);
  const handleReset = () => {
    setResetButton(false);
    setIsFirstPlayer(false);
    setSquares(Array(36).fill(""));
  };
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="flex flex-col space-y-1">
          <div className="flex justify-center items-center space-x-1">
            <Squar
              value={squares[0]}
              onClick={() => handleClick(0)}
              size={"sm"}
            />
            <Squar
              value={squares[1]}
              onClick={() => handleClick(1)}
              size={"sm"}
            />
            <Squar
              value={squares[2]}
              onClick={() => handleClick(2)}
              size={"sm"}
            />
            <Squar
              value={squares[3]}
              onClick={() => handleClick(3)}
              size={"sm"}
            />
            <Squar
              value={squares[4]}
              onClick={() => handleClick(4)}
              size={"sm"}
            />
            <Squar
              value={squares[5]}
              onClick={() => handleClick(5)}
              size={"sm"}
            />
          </div>
          <div className="flex justify-center items-center space-x-1">
            <Squar
              value={squares[6]}
              onClick={() => handleClick(6)}
              size={"sm"}
            />
            <Squar
              value={squares[7]}
              onClick={() => handleClick(7)}
              size={"sm"}
            />
            <Squar
              value={squares[8]}
              onClick={() => handleClick(8)}
              size={"sm"}
            />
            <Squar
              value={squares[9]}
              onClick={() => handleClick(9)}
              size={"sm"}
            />
            <Squar
              value={squares[10]}
              onClick={() => handleClick(10)}
              size={"sm"}
            />
            <Squar
              value={squares[11]}
              onClick={() => handleClick(11)}
              size={"sm"}
            />
          </div>
          <div className="flex justify-center items-center space-x-1">
            <Squar
              value={squares[12]}
              onClick={() => handleClick(12)}
              size={"sm"}
            />
            <Squar
              value={squares[13]}
              onClick={() => handleClick(13)}
              size={"sm"}
            />
            <Squar
              value={squares[14]}
              onClick={() => handleClick(14)}
              size={"sm"}
            />
            <Squar
              value={squares[15]}
              onClick={() => handleClick(15)}
              size={"sm"}
            />
            <Squar
              value={squares[16]}
              onClick={() => handleClick(16)}
              size={"sm"}
            />
            <Squar
              value={squares[17]}
              onClick={() => handleClick(17)}
              size={"sm"}
            />
          </div>
          <div className="flex justify-center items-center space-x-1">
            <Squar
              value={squares[18]}
              onClick={() => handleClick(18)}
              size={"sm"}
            />
            <Squar
              value={squares[19]}
              onClick={() => handleClick(19)}
              size={"sm"}
            />
            <Squar
              value={squares[20]}
              onClick={() => handleClick(20)}
              size={"sm"}
            />
            <Squar
              value={squares[21]}
              onClick={() => handleClick(21)}
              size={"sm"}
            />
            <Squar
              value={squares[22]}
              onClick={() => handleClick(22)}
              size={"sm"}
            />
            <Squar
              value={squares[23]}
              onClick={() => handleClick(23)}
              size={"sm"}
            />
          </div>
          <div className="flex justify-center items-center space-x-1">
            <Squar
              value={squares[24]}
              onClick={() => handleClick(24)}
              size={"sm"}
            />
            <Squar
              value={squares[25]}
              onClick={() => handleClick(25)}
              size={"sm"}
            />
            <Squar
              value={squares[26]}
              onClick={() => handleClick(26)}
              size={"sm"}
            />
            <Squar
              value={squares[27]}
              onClick={() => handleClick(27)}
              size={"sm"}
            />
            <Squar
              value={squares[28]}
              onClick={() => handleClick(28)}
              size={"sm"}
            />
            <Squar
              value={squares[29]}
              onClick={() => handleClick(29)}
              size={"sm"}
            />
          </div>
          <div className="flex justify-center items-center space-x-1">
            <Squar
              value={squares[30]}
              onClick={() => handleClick(30)}
              size={"sm"}
            />
            <Squar
              value={squares[31]}
              onClick={() => handleClick(31)}
              size={"sm"}
            />
            <Squar
              value={squares[32]}
              onClick={() => handleClick(32)}
              size={"sm"}
            />
            <Squar
              value={squares[33]}
              onClick={() => handleClick(33)}
              size={"sm"}
            />
            <Squar
              value={squares[34]}
              onClick={() => handleClick(34)}
              size={"sm"}
            />
            <Squar
              value={squares[35]}
              onClick={() => handleClick(35)}
              size={"sm"}
            />
          </div>
        </div>
        <h3 className="text-xl text-green-500 font-bold text-center">
          {message}
        </h3>
        {resetButton ? (
          <button
            className="bg-gray-500 text-white p-4 rounded-md text-center"
            onClick={handleReset}
          >
            Restart Game
          </button>
        ) : null}
      </div>
    </React.Fragment>
  );
}

export default TicTacToe36;
