import React, { useState } from "react";
import Tabs from "./Tabs";
import Profile from "./Profile";
import PasswordManager from "./PasswordManager";
import ChatRoom from "./ChatRoom";
const data = [
  {
    label: "Profile",
    content: <Profile />,
  },
  {
    label: "PasswordManager",
    content: <PasswordManager />,
  },
  {
    label: "Chat Room",
    content: <ChatRoom />,
  },
];

function Data() {
  const [selected, setSelected] = useState();
  const handleChange = (item) => {
    setSelected(item);
  };
  return (
    <div>
      <Tabs data={data} onChange={handleChange} />
    </div>
  );
}

export default Data;
