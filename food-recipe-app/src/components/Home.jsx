import React, { useContext } from "react";
import { GlobalContext } from "./context/Context";
import RecipeItem from "./RecipeItem/RecipeItem";

function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  return (
    <div className="py-3 container mx-auto  flex flex-wrap justify-center gap-2">
      {!loading ? (
        <>
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((item, index) => (
              <RecipeItem key={index} item={item} />
            ))
          ) : (
            <span className="lg:text-lg  text-center font-bold text-xl">
              Nothing to show. Please Search Something else..
            </span>
          )}
        </>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
}

export default Home;
