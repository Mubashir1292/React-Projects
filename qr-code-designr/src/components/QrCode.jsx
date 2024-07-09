import React, { useState } from "react";
import { Button } from "react-bootstrap";
import QRCode from "react-qr-code";

function QrCode() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerate = () => {
    const productDetails = {
      name: name.trim() || "N/A",
      price: price.trim() || "N/A",
      quantity: quantity.trim() || "N/A",
    };
    setQrCode(JSON.stringify(productDetails));
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl text-center text-green-500">
          QR Code Generator
        </h2>
        <div className="flex space-x-2 justify-center items-center my-3">
          <label htmlFor="name">Enter Item Name :</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 text-xl rounded-md"
            placeholder="Name..."
            id="name"
          />
        </div>
        <div className="flex space-x-2 justify-center items-center my-3">
          <label htmlFor="price">Enter Price :</label>
          <input
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 text-xl rounded-md"
            placeholder="Price..."
            id="price"
          />
        </div>
        <div className="flex space-x-2 justify-center items-center my-3">
          <label htmlFor="quantity">Enter Quantity :</label>
          <input
            value={quantity}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 text-xl rounded-md"
            placeholder="Quantity..."
            id="quantity"
          />
        </div>

        <Button
          variant="info"
          onClick={handleGenerate}
          className="bg-green-700 text-white font-bold text-xl p-4 rounded-lg my-3"
        >
          Generate
        </Button>
        <div className="flex justify-center items-center my-3">
          <QRCode size={200} value={qrCode} bgColor="#fff" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default QrCode;
