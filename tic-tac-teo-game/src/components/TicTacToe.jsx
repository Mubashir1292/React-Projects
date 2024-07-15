import React, { useEffect, useState } from "react";
import Squar from "./Squar";
function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState(false);
  const handleClick = (item) => {
    let copySquares = [...squares];
    if (checkWinner(copySquares) || copySquares[item] !== "") return;
    const emptyItems = copySquares.filter((singleItem) => singleItem === "");
    if (emptyItems.length >= 1) {
      if (copySquares[item] === "") {
        copySquares[item] = isXTurn ? "X" : "O";
        setIsXTurn((curr) => !curr);
        setSquares(copySquares);
      } else {
        alert("box is already checked");
      }
    } else {
      alert("Please Restart the game");
    }
  };
  const checkWinner = (checkedSquars) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    //0,1,2
    //3,4,5
    //6,7,8
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      console.log(checkedSquars);
      if (
        (checkedSquars[x] === checkedSquars[x] && checkedSquars[y]) ===
        checkedSquars[z]
      ) {
        return checkedSquars[x];
      }
      return null;
    }
  };

  useEffect(() => {
    if (!checkWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is the draw ! Please restart the game");
    } else if (checkWinner(squares)) {
      setStatus(`The Winner is ${checkWinner(squares)}`);
    } else {
      setStatus(`Next Player is  ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col justify-center items-center py-20 bg-gray-400 w-full h-screen">
          <div className="flex">
            <Squar value={squares[0]} onClick={() => handleClick(0)} />
            <Squar value={squares[1]} onClick={() => handleClick(1)} />
            <Squar value={squares[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="flex">
            <Squar value={squares[3]} onClick={() => handleClick(3)} />
            <Squar value={squares[4]} onClick={() => handleClick(4)} />
            <Squar value={squares[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="flex">
            <Squar value={squares[6]} onClick={() => handleClick(6)} />
            <Squar value={squares[7]} onClick={() => handleClick(7)} />
            <Squar value={squares[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
        <h3 className="text-xl text-center">{status && status}</h3>
      </div>
    </>
  );
}

export default TicTacToe;
