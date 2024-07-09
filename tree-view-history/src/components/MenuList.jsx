import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul>
      {list &&
        list.length &&
        list.map((item, index) => <MenuItem item={item} key={index} />)}
    </ul>
  );
}

export default MenuList;
