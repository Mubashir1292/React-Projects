import React from "react";
import StarRating from "./components/Star-Rating";
function App() {
  return (
    <div className="w-full flex justify-center items-center ">
      <StarRating countOfStars={10} />
    </div>
  );
}

export default App;
