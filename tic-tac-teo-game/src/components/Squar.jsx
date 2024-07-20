import React from "react";

function Squar({ value, onClick, size }) {
  return (
    <button
      className={`${
        size && size === "sm" ? "w-12 h-12 text-xl" : "w-24 h-24 text-3xl"
      } border border-gray-700 hover:bg-gray-100 
      hover:shadow-sm `}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Squar;
