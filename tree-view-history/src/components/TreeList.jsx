import React from "react";
import MenuList from "./MenuList";
function TreeList({ list = [] }) {
  return (
    <React.Fragment>
      <MenuList list={list} />
    </React.Fragment>
  );
}

export default TreeList;
