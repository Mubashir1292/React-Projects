import React, { useEffect, useState } from "react";
import Squar from "./Squar";

function TicTacToe2() {
  const [squars, setSquares] = useState(Array(9).fill(""));
  const [isFirstPerson, setIsFirstPerson] = useState(true);
  const [message, setMessage] = useState("");
  const [restartButton, setRestartButton] = useState(false);
  const handleClick = (boxNumber) => {
    const copySquares = squars;
    if (checkWinner(copySquares) || copySquares[boxNumber] !== "") return;
    copySquares[boxNumber] = isFirstPerson ? "X" : "O";
    setIsFirstPerson((curr) => !curr);
    setSquares(copySquares);
    checkWinner(copySquares);
  };
  const handleRestart = () => {
    setIsFirstPerson(true);
    setSquares(Array(9).fill(""));
    setRestartButton((curr) => !curr);
  };
  const checkWinner = (checkedSquars) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        checkedSquars[x] &&
        checkedSquars[x] === checkedSquars[y] &&
        checkedSquars[x] === checkedSquars[z]
      ) {
        setRestartButton((curr) => !curr);
        return checkedSquars[x];
      }
    }
    return null;
  };
  useEffect(() => {
    if (!checkWinner(squars) && squars.every((item) => item !== "")) {
      setMessage("This Game is Draw ! Please Restart the game");
    } else if (checkWinner(squars)) {
      setMessage(`Winner is ${isFirstPerson ? "O" : "X"}`);
    } else {
      setMessage(`Next Player is ${isFirstPerson ? "X" : "O"}`);
    }
  }, [squars, isFirstPerson]);
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center space-y-3">
        <div className="flex flex-col justify-center items-center space-y-3 my-32">
          <div className="flex justify-center items-center space-x-1">
            <Squar value={squars[0]} onClick={() => handleClick(0)} />
            <Squar value={squars[1]} onClick={() => handleClick(1)} />
            <Squar value={squars[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="flex justify-center items-center space-x-1">
            <Squar value={squars[3]} onClick={() => handleClick(3)} />
            <Squar value={squars[4]} onClick={() => handleClick(4)} />
            <Squar value={squars[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="flex justify-center items-center space-x-1">
            <Squar value={squars[6]} onClick={() => handleClick(6)} />
            <Squar value={squars[7]} onClick={() => handleClick(7)} />
            <Squar value={squars[8]} onClick={() => handleClick(8)} />
          </div>
          <h1 className="text-green-500 text-xl font-bold ">{message}</h1>
          {restartButton ? (
            <button
              className="bg-gray-700 text-white text-xl text-center px-5 py-2 "
              onClick={handleRestart}
            >
              Restart Game
            </button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

export default TicTacToe2;
