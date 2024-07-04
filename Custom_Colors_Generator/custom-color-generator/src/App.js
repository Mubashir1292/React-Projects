import React, { useState } from "react";
import Random2 from "./components/Random2";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("gray");
  const handleChange = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div
      style={{
        background: `${backgroundColor}`,
      }}
      className="w-full h-screen flex flex-col"
    >
      <h2 className="text-black text-center text-2xl font-semibold">
        Random Background Color Generator
      </h2>
      <Random2 onChange={handleChange} />
    </div>
  );
}

export default App;
