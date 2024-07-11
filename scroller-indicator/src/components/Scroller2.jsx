import React, { useEffect, useState } from "react";

function Scroller2({ url }) {
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [loading, setLoading] = useState(false);
  const getAllProducts = async (getUrl) => {
    try {
      const response = await fetch(getUrl);
      const result = await response.json();
      if (typeof result === "object") {
        setData(result.products);
        setLoading(false);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getAllProducts(url);
  }, [url]);
  const handleScrollingFetching = () => {
    const howMuchLength =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    console.log(height, howMuchLength);
    setScrollPercentage(Math.floor((howMuchLength / height) * 100));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollingFetching);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="flex flex-col bg-yellow-500 w-full sticky top-0">
          <h1 className="text-green-500 text-3xl font-semibold text-center my-3">
            Custom Scroll bar
          </h1>
          <div
            className={`bg-green-300 h-2`}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
        {loading ? (
          <span>Loading</span>
        ) : (
          <div className="flex flex-col justify-center items-center space-x-3">
            {data &&
              data.length &&
              data.map((item, index) => (
                <p className="text-xl" key={index}>
                  {item.title}
                </p>
              ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Scroller2;
