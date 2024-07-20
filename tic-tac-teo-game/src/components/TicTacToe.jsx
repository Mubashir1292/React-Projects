import React, { useEffect, useState } from "react";
import Squar from "./Squar";
function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [restartGame, setRestartGame] = useState(false);
  const handleClick = (squarNumber) => {
    const copySquars = [...squares];
    if (getWinner(copySquars) || copySquars[squarNumber] !== "") return;
    copySquars[squarNumber] = isXTurn ? "X" : "O";
    setIsXTurn((curr) => !curr);
    setSquares(copySquars);
  };
  // 0,1,2
  // 3,4,5,
  // 6,7,8
  const getWinner = (getSquars) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let item = 0; item < winningPatterns.length; item++) {
      const [x, y, z] = winningPatterns[item];
      if (
        getSquars[x] &&
        getSquars[x] === getSquars[y] &&
        getSquars[x] === getSquars[z]
      ) {
        return getSquars[x];
      }
    }
    return null;
  };
  const handleReset = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
    setRestartGame(false);
  };
  useEffect(() => {
    if (getWinner(squares) || squares.every((s) => s !== "")) {
      setStatus("This is a Draw! Please Restart The Game");
      setRestartGame(true);
    } else if (getWinner(squares)) {
      setStatus(`Winner is  ${getWinner(squares)}`);
      setRestartGame(true);
    } else {
      setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center   p-4 space-y-1 w-full ">
          <div className="flex space-x-1">
            <Squar
              value={squares[0]}
              onClick={() => handleClick(0)}
              size={"lg"}
            />
            <Squar
              value={squares[1]}
              onClick={() => handleClick(1)}
              size={"lg"}
            />
            <Squar
              value={squares[2]}
              onClick={() => handleClick(2)}
              size={"lg"}
            />
          </div>
          <div className="flex space-x-1">
            <Squar
              value={squares[3]}
              onClick={() => handleClick(3)}
              size={"lg"}
            />
            <Squar
              value={squares[4]}
              onClick={() => handleClick(4)}
              size={"lg"}
            />
            <Squar
              value={squares[5]}
              onClick={() => handleClick(5)}
              size={"lg"}
            />
          </div>
          <div className="flex space-x-1">
            <Squar
              value={squares[6]}
              onClick={() => handleClick(6)}
              size={"lg"}
            />
            <Squar
              value={squares[7]}
              onClick={() => handleClick(7)}
              size={"lg"}
            />
            <Squar
              value={squares[8]}
              onClick={() => handleClick(8)}
              size={"lg"}
            />
          </div>
          <h3 className="text-xl text-center"> {status}</h3>
          {restartGame ? (
            <button
              className="bg-green-600 text-white text-xl px-6 py-2 font-normal rounded"
              onClick={handleReset}
            >
              Restart Game
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
