import React from "react";

function ShowSuggestions({ data, onChange }) {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <ul className="list-none">
          {data && data.length
            ? data.map((item, index) => (
                <div
                  key={index}
                  className="p-1 bg-gray-200 my-2 hover:bg-gray-300 hover:shadow-lg cursor-pointer w-72 rounded-md"
                  onClick={() => onChange(item)}
                >
                  <li className="text-center">{item}</li>
                </div>
              ))
            : null}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ShowSuggestions;
