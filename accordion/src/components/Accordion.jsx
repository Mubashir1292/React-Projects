import React, { useEffect, useState } from "react";
import data from "./data";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
function Accordion() {
  const [AccordionData, setAccordionData] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [listOfItems, setListOfItems] = useState([]);
  useEffect(() => {
    setAccordionData(data);
  }, []);

  const handleSelectItem = (item) => {
    setSelectedItem(item?.id === selectedItem?.id ? null : item);
  };
  const handleSelectMultiple = () => {
    setEnableMultipleSelection((curr) => !curr);
  };
  const handleMultipleSelectionItems = (item) => {
    const copyOfListItems = [...listOfItems];
    const findingIndexOfItemPassed = copyOfListItems.indexOf(item?.id);
    if (findingIndexOfItemPassed === -1) {
      copyOfListItems.push(item?.id);
    } else {
      copyOfListItems.splice(findingIndexOfItemPassed, 1);
    }
    setListOfItems(copyOfListItems);
  };
  return (
    <React.Fragment>
      <h1 className="text-orange-600 text-xl text-center font-semibold mt-3">
        Accrodion With Multiple Selections
      </h1>
      <div className="flex flex-col justify-center items-center w-3/6 mx-auto my-3 space-y-2">
        <React.Fragment>
          <div className="flex justify-center items-center space-x-2">
            <input
              type="checkbox"
              checked={enableMultipleSelection}
              onChange={handleSelectMultiple}
              className="cursor-pointer"
            />
            <span className="text-sm cursor-default">Multiple Selection</span>
          </div>
          {AccordionData && AccordionData.length > 0 ? (
            AccordionData?.map((item, index) => (
              <div
                className="flex flex-col w-4/6 justify-between items-center bg-orange-500 rounded-xl px-4 py-1 cursor-pointer"
                key={index}
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelectionItems(item)
                    : () => handleSelectItem(item)
                }
              >
                <div className="flex justify-between space-x-10 items-center">
                  <h3 className="text-lg">{item?.question}</h3>
                  <h3 className="text-lg">
                    {selectedItem?.id === item?.id ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </h3>
                </div>
                {enableMultipleSelection
                  ? listOfItems.indexOf(item?.id) !== -1 && (
                      <h4>{item?.answer}</h4>
                    )
                  : selectedItem?.id === item?.id && <h4>{item?.answer}</h4>}
              </div>
            ))
          ) : (
            <></>
          )}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
}

export default Accordion;
