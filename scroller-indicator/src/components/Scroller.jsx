import React, { useEffect, useState } from "react";

function Scroller({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [percentageScroll, setPercentageScroll] = useState(0);

  // Api Calling to get the data of the products
  const getAllProducts = async (getUrl) => {
    try {
      const products = await fetch(getUrl);
      const result = await products.json();
      if (typeof result === "object") {
        setData(result.products);
        setLoading((curr) => !curr);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts(url);
  }, [url]);

  const handleScrolling = () => {
    // how much scrolled
    // height of total screen
    // percentage of scrolling

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setPercentageScroll(Math.floor((howMuchScrolled / height) * 100));
  };
  console.log(percentageScroll);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center">
        <div className="header bg-yellow-600 w-full pt-4 sticky top-0">
          <h1 className="text-2xl text-white font-semibold text-center my-2">
            Scroll-bar Indicator
          </h1>
          <div
            style={{
              width: `${percentageScroll}%`,
              backgroundColor: "green",
              height: "30px",
            }}
          >
            {/* Scroller Line */}
          </div>
        </div>
        {loading ? (
          <span>Loading</span>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            {data && data.length > 0
              ? data.map((item, index) => <p key={index}>{item.title}</p>)
              : null}
            {/* main  data*/}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Scroller;
