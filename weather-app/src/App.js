import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/weather";
function App() {
  const [search, setSearch] = useState("");
  const handleChange = (city) => {
    setSearch(city);
    console.log(city);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col w-4/6 mx-auto my-3 rounded-md space-y-3 bg-green-500">
        <h3 className="text-xl text-center  text-white font-bold font-serif my-3">
          Weather App
        </h3>
        <Search onChange={handleChange} />
        <Weather cityName={search} />
      </div>
    </React.Fragment>
  );
}

export default App;
