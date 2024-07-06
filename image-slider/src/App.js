import React from "react";
import ImageSlider from "./component/Image_Slider";

function App() {
  return (
    <div>
      <ImageSlider url={`https://picsum.photos/v2/list`} limit={10} page={1} />
    </div>
  );
}

export default App;
