import { useEffect } from "react";
import { useState } from "react";
function useLocalStorage({ key, defaultValue }) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      const item = localStorage.getItem(key);
      currentValue = item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
export default useLocalStorage;
