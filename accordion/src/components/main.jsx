import React, { useEffect, useState } from "react";
import data from "./data";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
function Main() {
  const [dataToInsert, setDataToInsert] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    setDataToInsert(data);
  }, []);
  const handleSelected = (item) => {
    setSelectedItem(item);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col w-3/6 space-y-2 p-4 rounded-xl mx-auto my-10 self-center ">
        {dataToInsert &&
          dataToInsert?.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center bg-orange-600 rounded-xl"
              key={index}
            >
              <div
                className="flex  justify-around items-center space-x-4 hover:font-semibold  cursor-pointer"
                onClick={() => handleSelected(item)}
              >
                <h4 className="text-xl">{item?.question}</h4>
                <h4 className="text-xl">
                  {selectedItem.id === item.id ? (
                    <FaChevronRight />
                  ) : (
                    <FaChevronDown />
                  )}
                </h4>
              </div>
              {selectedItem?.id === item?.id ? (
                <div className="flex flex-col justify-center items-center w-3/6 ">
                  <h5 className="text-sm text-center bg-orange-500 rounded-xl">
                    {selectedItem?.answer}
                  </h5>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default Main;
