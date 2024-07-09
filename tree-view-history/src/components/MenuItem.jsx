import React, { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [currentChildren, setCurrentChildren] = useState({});

  const handleToggleChildren = (currentText) => {
    setCurrentChildren({
      ...currentChildren,
      [currentText]: !currentChildren[currentText],
    });
  };

  return (
    <React.Fragment>
      <li className="flex  justify-center items-center">
        <span className="cursor-default">{item.label}</span>
        {item && item.children && item.children.length > 0 ? (
          <span
            onClick={() => handleToggleChildren(item.label)}
            className="cursor-pointer"
          >
            {currentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
        {item &&
        item.children &&
        item.children.length > 0 &&
        currentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </React.Fragment>
  );
}
