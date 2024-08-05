import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router";
import FoodRecipe from "./components/food-recipe/FoodRecipe";
import Favourite from "./components/favourite/Favourite";
import Details from "./components/details/Details";
import Home from "./components/Home";
function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodRecipe" element={<FoodRecipe />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
