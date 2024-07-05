import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
function StarRating({ countOfStars }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const handleMouseEnter = (getCurrentStars) => {
    setHover(getCurrentStars);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  const handleClick = (getCurrentStars) => {
    setRating(getCurrentStars);
  };
  const handleSubmitRecord = () => {
    alert(`You give ${rating} to us!\n Thanks`);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col  justify-center items-center my-3 w-full bg-green-400">
        <h3 className="text-yellow-400 font-bold text-center text-2xl">
          Please Rate us..
        </h3>
        <div className="flex justify-center items-center">
          {countOfStars &&
            [...Array(countOfStars)].map((_, index) => {
              index += 1;
              return (
                <FaStar
                  className={index <= (hover || rating) ? "active" : "inactive"}
                  key={index}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() => handleClick(index)}
                  size={40}
                />
              );
            })}
        </div>
        <button className="border" onClick={handleSubmitRecord}>
          Submit
        </button>
      </div>
    </React.Fragment>
  );
}

export default StarRating;
