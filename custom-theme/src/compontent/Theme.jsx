import React from "react";
import useLocalStorage from "./Hooks/UselocalStorage";
import "./theme.css";
function Theme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <React.Fragment>
      <div
        className={`flex flex-col justify-center items-center py-32 space-y-3 h-screen light-dark-mode`}
        data-theme={theme}
      >
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </React.Fragment>
  );
}

export default Theme;
