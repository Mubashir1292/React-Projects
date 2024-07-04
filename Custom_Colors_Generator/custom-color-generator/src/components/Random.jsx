import React, { useState } from "react";
import Button from "react-bootstrap/Button";
function Random({ onChange }) {
  const [Randomcolor, setRandomColor] = useState("");
  const [rgbColorCode, setRgbColorCode] = useState("");
  const [HexColorCode, setHEXColorCode] = useState("");
  const handleGenerateRandomColor = () => {
    onChange("#000");
  };
  const handleGenerateRGBColor = () => {};
  const handleGenerateHEXColor = () => {};
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
          <Button
            onClick={handleGenerateHEXColor}
            variant="danger"
            className="text-white"
          >
            Generate HEX Color
          </Button>
          <Button
            onClick={handleGenerateRGBColor}
            variant="warning"
            className="text-white"
          >
            Generate RGB Color
          </Button>
        </div>
        <div className="flex justify-center items-center space-x-3 p-3">
          <span>RGB:{rgbColorCode}</span>
          <span>HEX:{HexColorCode}</span>
          <span>RGB:{rgbColorCode}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Random;
