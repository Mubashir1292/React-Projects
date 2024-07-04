import React, { useState } from "react";
import Button from "react-bootstrap/Button";
function Random({ onChange }) {
  const [Randomcolor, setRandomColor] = useState("");
  const [option, setOption] = useState("HEX");
  const handleGenerateRandomColor = () => {
    if (option === "HEX") {
      handleCreateHexColor();
    } else if (option === "RGB") {
      handleCreateRGBColor();

      // console.log(Randomcolor);
    }
  };
  const handleCreateRGBColor = () => {
    const r = giveBackRandomNumber(256);
    const g = giveBackRandomNumber(256);
    const b = giveBackRandomNumber(256);
    const color = `rgb(${r},${g},${b})`;
    console.log(color);
    setRandomColor(color);
    onChange(color);
  };
  const giveBackRandomNumber = (length) => {
    const number = Math.floor(Math.random() * length);
    return number;
  };
  const handleCreateHexColor = () => {
    //#676690
    const colorsArray = [
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
      hexColor += colorsArray[giveBackRandomNumber(colorsArray.length)];
    }
    setRandomColor(hexColor);
    onChange(hexColor);
  };

  const handleChangeType = (type) => {
    setOption(type);
  };

  return (
    <React.Fragment>
      <div className="text-sm flex flex-col">
        <div className="flex justify-center items-center space-x-3 my-2">
          <Button
            onClick={handleGenerateRandomColor}
            variant="info"
            className="text-white"
          >
            Generate Random Color
          </Button>
          <div className="flex justify-between items-center space-x-3">
            <input
              type="radio"
              checked={option === "HEX" ? true : false}
              onChange={() => handleChangeType("HEX")}
              className="cursor-pointer"
            />
            <span className="cursor-default">
              Generate HEX Background-Color
            </span>
          </div>
          <div className="flex justify-between items-center space-x-2">
            <input
              type="radio"
              checked={option === "RGB" ? true : false}
              onChange={() => handleChangeType("RGB")}
              className="cursor-pointer"
            />
            <span className="cursor-default">
              Generate RGB Background-Color
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-3 p-3">
          <span className="text-2xl text-[#000] font-bold">
            RGB : {option === "RGB" ? Randomcolor : null}
          </span>
          <span className="text-2xl text-[#000] font-bold">
            HEX : {option === "HEX" ? Randomcolor : null}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Random;
