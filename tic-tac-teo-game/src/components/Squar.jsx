import React from "react";

function Squar({ value, onClick }) {
  return (
    <button
      className=" w-24 h-24 text-3xl border border-gray-700 hover:bg-gray-100 hover:shadow-sm "
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Squar;
