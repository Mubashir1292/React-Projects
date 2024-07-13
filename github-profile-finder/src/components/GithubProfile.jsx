import React, { useState } from "react";

function GithubProfile() {
  const [name, setName] = useState("");
  const [profileData, setProfileData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.github.com/users/${name && name}`
      );
      const result = await response.json();
      if (typeof result === "object" || Array.isArray(result)) {
        setProfileData(result);
        console.log(result);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center p-3 ">
        <h1 className="text-green-500 text-center text-2xl font-bold">
          Github Profile Founder
        </h1>

        <form
          action="#"
          onSubmit={handleSubmit}
          className=" flex justify-center items-center w-full space-x-3"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border h-10 text-sm p-3 w-3/6 rounded"
            placeholder="Search..."
          />
          <button className="text-white bg-green-600 hover:bg-green-500 font-semibold border-green-700  px-5 py-2 rounded">
            Find Now
          </button>
        </form>
        <div className="flex flex-col space-y-3 p-3 border m-2">
          <img
            src={profileData && profileData.avatar_url}
            alt={profileData.login}
            className="rounded-full w-3/6 h-32 flex self-center"
          />
          <div className="flex justify-around items-center">
            <h2>{profileData.id && profileData.id}</h2>
            <h2>{profileData.login && profileData.login}</h2>
          </div>
          <div className="flex justify-around items-center">
            <h2 className="text-xs">Followers:</h2>
            <h2>{profileData.followers && profileData.followers}</h2>
          </div>
          <div className="flex justify-around items-center">
            <h2>Public Repos:</h2>
            <h2>{profileData.public_repos && profileData.public_repos}</h2>
          </div>
          <div className="flex justify-around items-center">
            <h2>Last Updated:</h2>
            <h2>
              {profileData.updated_at && profileData.updated_at.split("T")[0]}
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GithubProfile;
