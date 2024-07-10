import React from "react";

function Theme() {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center py-32 space-y-3">
        <p>Hello World</p>
        <button className="bg-green-600 text-white text-center text-xl p-4 rounded-md w-52 hover:bg-green-500">
          Change Theme
        </button>
      </div>
    </React.Fragment>
  );
}

export default Theme;
