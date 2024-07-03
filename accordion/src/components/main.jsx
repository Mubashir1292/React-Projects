import React, { useEffect, useState } from "react";
import data from "./data";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
function Main() {
  const [dataToInsert, setDataToInsert] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [listOfItems, setListOfItems] = useState([]);
  useEffect(() => {
    setDataToInsert(data);
  }, []);
  const handleSelected = (id) => {
    setSelectedItem(id === selectedItem ? null : id);
  };
  const handleMultipleSelection = (id) => {
    let copyListOfItems = [...listOfItems];
    const findingIndexOfCurrentItem = copyListOfItems.indexOf(id);
    if (findingIndexOfCurrentItem === -1) {
      copyListOfItems.push(id);
    } else {
      copyListOfItems.splice(findingIndexOfCurrentItem, 1);
    }
    setListOfItems(copyListOfItems);
  };
  console.log(listOfItems);

  const handleChange = () => {
    setEnableMultipleSelection((curr) => !curr);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col w-3/6 space-y-2 p-4 rounded-xl mx-auto my-10 self-center ">
        <div className="flex justify-center items-center space-x-2 cursor-default">
          <input
            type="checkbox"
            checked={enableMultipleSelection}
            onChange={handleChange}
            className="cursor-pointer"
          />
          Multiple Selection
        </div>
        {dataToInsert &&
          dataToInsert?.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center bg-orange-600 rounded-xl"
                key={index}
              >
                <div
                  className="flex  justify-around items-center space-x-4 hover:font-semibold  cursor-pointer"
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultipleSelection(item?.id)
                      : () => handleSelected(item?.id)
                  }
                >
                  <h4 className="text-xl">{item?.question}</h4>
                  <h4 className="text-xl">
                    {selectedItem === item?.id ? (
                      <FaChevronRight />
                    ) : (
                      <FaChevronDown />
                    )}
                  </h4>
                </div>
                {enableMultipleSelection
                  ? listOfItems.indexOf(item?.id) !== -1 && (
                      <h4 className="text-sm">{item?.answer}</h4>
                    )
                  : selectedItem === item?.id && (
                      <h4 className="text-sm">{item?.answer}</h4>
                    )}
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Main;
