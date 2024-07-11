import React from "react";
import Scroller from "./components/Scroller";

function App() {
  return (
    <div>
      <Scroller url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
