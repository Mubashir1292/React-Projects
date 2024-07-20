import React, { useState } from "react";
import Squar from "./Squar";

function TicTacToe36() {
  const [squares, setSquares] = useState(Array(36).fill(""));
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [message, setMessage] = useState("");
  const handleClick = (boxNumber) => {};
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
            <Squar
              value={squares[24]}
              onClick={() => handleClick(24)}
              size={"sm"}
            />
          </div>
          <div className="flex justify-center items-center space-x-1">
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
            <Squar
              value={squares[30]}
              onClick={() => handleClick(30)}
              size={"sm"}
            />
          </div>
          <div className="flex justify-center items-center space-x-1">
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
            <Squar
              value={squares[36]}
              onClick={() => handleClick(36)}
              size={"sm"}
            />
          </div>
        </div>
        <h3 className="text-xl text-green-500 font-bold ">{message}</h3>
      </div>
    </React.Fragment>
  );
}

export default TicTacToe36;
