import React, { useState } from "react";
import Button from "react-bootstrap/Button";
function Random2({ onChange }) {
  const [type, setType] = useState("HEX");
  const [randomColor, setRandomColor] = useState("");
  const handleGenerateRandomColor = () => {
    if (type === "HEX") {
      handleGenerateHEXColor();
    } else {
      handleGenerateRGBColor();
    }
  };
  const handleRandomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleGenerateHEXColor = () => {
    const hexColorsArray = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexColorsArray[handleRandomNumber(hexColorsArray.length)];
    }
    onChange(hexColor);
    setRandomColor(hexColor);
  };
  const handleGenerateRGBColor = () => {
    const r = handleRandomNumber(256);
    const g = handleRandomNumber(256);
    const b = handleRandomNumber(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    onChange(rgbColor);
    setRandomColor(rgbColor);
  };
  return (
    <React.Fragment>
      <div className="flex flex-row justify-center items-center space-x-3 my-3">
        <Button variant="info" onClick={handleGenerateRandomColor}>
          Generate Random Color
        </Button>
        <div className="flex justify-center items-center space-x-2">
          <input
            type="radio"
            name="hex"
            id="Hex"
            checked={type === "HEX" ? true : false}
            onChange={() => setType("HEX")}
          />
          <span className="text-xl font-semibold">Only HEX Colors</span>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <input
            type="radio"
            name="hex"
            id="Hex"
            checked={type === "RGB" ? true : false}
            onChange={() => setType("RGB")}
          />
          <span className="text-xl font-semibold">Only RGB Colors</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Random2;
