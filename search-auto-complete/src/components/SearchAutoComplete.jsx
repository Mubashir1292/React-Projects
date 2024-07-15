import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShowSuggestions from "./ShowSuggestions";
function SearchAutoComplete() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const fetchAllUsers = async () => {
    setLoading((curr) => !curr);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      if (Array.isArray(result.users)) {
        setUsers(result.users.map((userItem) => userItem.firstName));
        setLoading((curr) => !curr);
        setError(null);
      } else {
        console.log(result);
        setLoading((curr) => !curr);
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
    setName(query);
    if (query.length > 1) {
      const filteredData =
        users &&
        users.length &&
        users.filter((itemData) => itemData.toLowerCase().includes(query));
      setShowDropdown(true);
      setFilteredUsers(filteredData);
    } else {
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  };
  const handleClick = (event) => {
    setName(event);
    setFilteredUsers([]);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col">
        {error && <h3>{error}</h3>}
        <h1 className="text-xl text-green-500 font-bold text-center my-3">
          Auto Search Complete
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name="searchName"
            placeholder="Search...."
            value={name}
            onChange={handleChange}
            className="border w-2/6 h-10 text-sm rounded px-4"
          />
        </div>
        {loading && <h2>Loading........</h2>}
        {showDropdown && (
          <div className="flex justify-center items-center">
            <ShowSuggestions data={filteredUsers} onChange={handleClick} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default SearchAutoComplete;
