import React from "react";
import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-3 bg-white/75 shadow-xl gap-5 border-2 rounded-lg ">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt={item?.title} className="block w-full" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-cyan-700 text-lg font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow bg-black text-white my-3"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
