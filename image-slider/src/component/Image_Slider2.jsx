import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Image_Slider2({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setcurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchImages = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(true);
      if (Array.isArray(result)) {
        setImages(result);
        setLoading(false);
        console.log(result);
      } else {
        console.log(result);
      }
    } catch (e) {
      setErrorMessage(e.Message);
    }
  };
  useEffect(() => {
    fetchImages();
  }, [url]);
  const handlePrevious = () => {
    currentSlide === images.length - 1
      ? setcurrentSlide(images.length - 1)
      : setcurrentSlide(currentSlide - 1);
  };
  const handleNext = () => {
    setcurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          {loading && <span>Data is Loading</span>}
          {errorMessage.length > 0 && <span>{errorMessage}</span>}
          <div className="relative flex w-[600px] h-[450px] p-2 rounded-xl ">
            <BsArrowLeftCircleFill
              onClick={handlePrevious}
              className={`left-10 top-52 text-2xl  text-white absolute  cursor-pointer`}
            />
            {images && images?.length > 0
              ? images?.map((img, index) => (
                  <img
                    src={img.download_url}
                    alt={img.download_url}
                    key={index}
                    className={`w-full h-full ${
                      currentSlide === index ? `block` : `hidden`
                    }`}
                  />
                ))
              : null}
            <BsArrowRightCircleFill
              onClick={handleNext}
              className={`right-10 text-white text-2xl top-52  absolute cursor-pointer`}
            />
            <span className="flex absolute bottom-2">
              {images && images.length
                ? images.map((_, index) => (
                    <button
                      key={index}
                      className={`bg-white w-[15px] h-[15px] rounded-full border-0 outline-none cursor-pointer mx-1 ${
                        currentSlide === index ? "bg-gray-500" : "bg-gray-100"
                      }`}
                      onClick={() => setcurrentSlide(index)}
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

export default Image_Slider2;
