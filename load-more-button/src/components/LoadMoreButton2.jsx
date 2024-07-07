import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./style.css"; // Import the CSS file

function LoadMoreButton2() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleMoreButton = async (length) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          length === 0 ? 0 : length * 20
        }`
      );
      const result = await response.json();
      if (Array.isArray(result?.products)) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
      } else {
        //        console.log(result);
      }
    } catch (e) {
      alert(e.Message);
    }
  };

  useEffect(() => {
    handleMoreButton(count);
  }, [count]);

  const handleLoadMore = () => {
    setCount(count <= 5 ? count + 1 : 0);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center p-3">
        <h3 className="text-green-600 text-center text-2xl my-3">
          Modern Grocery Store
        </h3>
        {loading ? <span>Data is Loading</span> : null}
        <div className="grid grid-cols-4 gap-5">
          {products?.map((product, index) => (
            <div className="flex flex-col p-2 border" key={index}>
              <div className="flex justify-between items-center">
                <h4 className="text-xs text-normal">{product?.title}</h4>
                <h4 className="text-xs text-normal">{product?.brand}</h4>
              </div>
              <div className="flex justify-center items-center image-container">
                <img
                  src={product?.images}
                  alt={product?.images}
                  className="w-full h-full zoom-image cursor-pointer"
                />
              </div>
              <div className="flex justify-center items-center">
                <h4>{product?.availabilityStatus}</h4>
              </div>
            </div>
          ))}
        </div>
        {products?.length <= 100 ? (
          <Button onClick={handleLoadMore} variant="info">
            Load More Products
          </Button>
        ) : (
          <div className="flex justify-center space-x-4 items-center my-5">
            <Button variant="success" disabled>
              Load More Products
            </Button>
            <span className="text-red-500">You have Reached the Limit</span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default LoadMoreButton2;
