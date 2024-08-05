import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading((curr) => !curr);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const result = await response.json();
      if (response.status === 200) {
        setRecipesList(result?.data?.recipes);
        setLoading((curr) => !curr);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setRecipesList([]);
    }
  };
  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
