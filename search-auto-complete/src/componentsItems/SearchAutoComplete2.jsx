import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShowSuggestions from "./ShowSuggestions";

function SearchAutoComplete2() {
  const [searchParams, setSearchparams] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const fetchAllUsers = async () => {
    try {
      setLoading((curr) => !curr);
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      console.log(result.users);
      if (Array.isArray(result.users)) {
        setUsers(result.users.map((item) => item.firstName));
        setLoading((curr) => !curr);
        setError(null);
      } else {
        console.log(result);
        setError(null);
      }
    } catch (error) {
      setError(error);
      setLoading((curr) => !curr);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchparams(query);
    if (query.length > 1) {
      const filteredUsers =
        users &&
        users.length &&
        users.filter((itemData) => itemData.toLowerCase().includes(query));
      console.log(filteredUsers);
      setFilteredUsers(filteredUsers);
      setLoading(false);
    } else {
      setFilteredUsers([]);
    }
  };
  const handleClick = (item) => {
    setSearchparams(item);
    setFilteredUsers([]);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <h1 className="text-green-600 text-center text-xl font-bold my-3">
          Search Auto Complete
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name="searchParams"
            value={searchParams}
            onChange={handleChange}
            className="border w-2/6 h-10 text-sm px-3 rounded-md"
            placeholder="Search...."
          />
        </div>
        <div className="flex flex-col">
          {loading && (
            <h3 className="text-center text-sm">Data is loading....</h3>
          )}
          <div className="flex w-full justify-center items-center">
            <ShowSuggestions data={filteredUsers} onChange={handleClick} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchAutoComplete2;
