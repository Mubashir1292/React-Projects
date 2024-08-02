import React, { useState } from "react";

function Search({ onChange }) {
  const [search, setSearch] = useState("");
  const handleSubmit = () => {
    onChange(search || "london");
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
        placeholder="Enter City ..."
        className="border px-5 py-2 text-lg font-normal rounded w-4/6"
      />
      <button
        className="bg-green-600 border text-white text-lg text-center px-4 py-2 rounded-lg hover:bg-white hover:border-green-600 hover:text-green-600 font-bold"
        onClick={handleSubmit}
      >
        Search Now
      </button>
    </div>
  );
}

export default Search;
