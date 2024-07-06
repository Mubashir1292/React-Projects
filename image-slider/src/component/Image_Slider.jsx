import React from "react";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
function Image_Slider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const result = await response.json();
      setLoading(true);
      if (Array.isArray(result)) {
        setImages(result);
        setLoading(false);
      } else {
        alert(result);
      }
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.message);
    }
  };
  useEffect(() => {
    if (url !== null) fetchImages(url);
  }, [url]);
  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-3xl text-center my-4">
          Custom Image Slider
        </h1>
        <div className="flex">
          {loading ? <h3>Please Wait Data is Loading </h3> : null}
          {errorMessage ? <h3>{errorMessage && errorMessage}</h3> : null}
          <div className="relative flex justify-center items-start w-[600px] h-[450px]">
            <BsArrowLeftCircleFill
              onClick={handlePrevious}
              className="absolute left-10 top-52 text-3xl text-white cursor-pointer hover:drop-shadow-xl "
            />
            {images &&
              images.map((image, index) => (
                <img
                  src={image.download_url}
                  alt={image.download_url}
                  key={index}
                  className={`rounded-sm shadow-sm w-full h-full ${
                    currentSlide === index ? `block` : `hidden`
                  } `}
                />
              ))}
            <BsArrowRightCircleFill
              onClick={handleNext}
              className="absolute right-0 text-3xl top-52 text-white  cursor-pointer hover:drop-shadow-xl"
            />
            <span className="flex absolute bottom-2">
              {images && images.length
                ? images.map((_, index) => (
                    <button
                      key={index}
                      className={`bg-white w-[15px] h-[15px] rounded-full border-0 outline-none cursor-pointer mx-1 ${
                        currentSlide === index ? "bg-gray-500" : "bg-gray-100"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></button>
                  ))
                : null}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Image_Slider;
