import React, { useState } from "react";
import Random from "./components/Random";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("gray");
  const handleChange = (color) => {
    setBackgroundColor(color === backgroundColor ? null : color);
  };
  return (
    <div
      style={{ background: `${backgroundColor}` }}
      className="w-full h-screen"
    >
      <h2 className="text-black text-center text-2xl font-semibold">
        Random Background Color Generator
      </h2>
      <Random onChange={handleChange} />
    </div>
  );
}

export default App;
