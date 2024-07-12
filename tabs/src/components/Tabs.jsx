import React, { useState } from "react";
function Tabs({ data, onChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (item) => {
    setSelectedTab(item);
    onChange(data[item]);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="flex justify-center items-center space-x-3 p-3">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <h3
                key={index}
                className={`text-xl font-normal cursor-pointer border-r-2 p-3 ${
                  selectedTab === index
                    ? "font-bold shadow"
                    : "font-normal shadow-none"
                }`}
                onClick={() => handleChange(index)}
              >
                {item.label}
              </h3>
            ))}
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          {data[selectedTab] && (
            <div className="">{data[selectedTab].content}</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tabs;
