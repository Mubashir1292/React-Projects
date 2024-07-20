import React, { useState } from "react";
import TicTacToe36 from "./components/TicTacToe36";
import TicTacToe from "./components/TicTacToe";
function App() {
  const [tictactoe, setTicTacToe] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center space-y-5 my-10">
      <h1 className="text-green-600 text-3xl font-bold text-center font-mono">
        WelCome To Gaming Zone
      </h1>
      <h2 className="text-xl text-dark font-sans">
        Which Game You Want to Play
      </h2>
      <div className="flex justify-center items-center space-x-4">
        <div
          className="bg-gray-400 hover:bg-gray-500 text-white p-4 rounded cursor-default"
          onClick={() => setTicTacToe(0)}
        >
          Tic Tac Toe 3X3
        </div>
        <div
          className="bg-gray-400 hover:bg-gray-500 text-white p-4 rounded cursor-default"
          onClick={() => setTicTacToe(1)}
        >
          Tic Tac Toe 6X6
        </div>
      </div>
      <div className="flex justify-center items-center space-y-3">
        {tictactoe === 0 ? <TicTacToe /> : <TicTacToe36 />}
      </div>
    </div>
  );
}

export default App;
