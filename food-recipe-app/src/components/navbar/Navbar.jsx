import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row">
      <h2 className="text-2xl font-semibold">
        <li className="list-none">
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-500 duration-300 cursor-pointer"
          >
            FoodRecipe
          </NavLink>
        </li>
      </h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-white/75
          p-3
          px-8
          rounded-full
          outline-none
          lg-w-96
          shadow-lg
          shadow-red-100
          border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="flex gap-5 list-none">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-500 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourite"}
            className="text-black hover:text-gray-500 duration-300"
          >
            Favourite
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
