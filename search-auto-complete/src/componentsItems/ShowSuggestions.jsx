import React from "react";

function ShowSuggestions({ data, onChange }) {
  return (
    <React.Fragment>
      <ul className="list-none">
        {data &&
          data.map((item, index) => (
            <li
              key={index}
              onClick={() => onChange(item)}
              className="bg-gray-200 hover:bg-gray-300 cursor-pointer w-full text-center px-28 my-1 rounded"
            >
              {item || null}
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
}

export default ShowSuggestions;
