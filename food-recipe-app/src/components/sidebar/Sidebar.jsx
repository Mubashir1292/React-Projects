import React from "react";

function Sidebar() {
  const links = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ];
  return (
    <div>
      {links.map((item, index) => (
        <li key={index}>{item.label}</li>
      ))}
    </div>
  );
}

export default Sidebar;
