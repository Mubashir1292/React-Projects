import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
function LoadMoreButton() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchMoreProducts = async (length) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          length === 0 ? 0 : length * 20
        }`
      );
      const result = await response.json();
      if (Array.isArray(result.products)) {
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      } else {
        console.log(result);
      }
    } catch (e) {
      console.log(e.Message);
    }
  };
  useEffect(() => {
    fetchMoreProducts(count);
  }, [count]);
  const handleLoadMore = () => {
    setCount(count <= 100 ? count + 1 : 0);
  };
  return (
    <React.Fragment>
      {loading ? <span className="text-green-500">Data is Loading</span> : null}
      <div className="grid grid-cols-4 gap-2 mt-3">
        {products?.map((product, index) => (
          <div key={index} className={`border p-4 rounded-sm flex flex-col `}>
            <div className="flex justify-around items-center">
              <h4 className="text-[10px] font-normal">{product?.title}</h4>
              <span className="text-sm font-semibold">{product?.category}</span>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={product?.images}
                alt={product?.images}
                className={`w-[100px] h-[100px]`}
              />
            </div>
            <div className="flex justify-center items-center space-x-1">
              <span className="text-xs text-center">Discount:</span>
              <span className="text-xs text-center">
                {product?.discountPercentage}%
              </span>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <span className="text-xs text-center">return Policy:</span>
              <span className="text-sm font-semibold text-center">
                {product?.returnPolicy}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center  ">
        {products?.length <= 100 ? (
          <Button
            onClick={handleLoadMore}
            className="border flex self-center text-center w-48 my-3 h-12 p-2  rounded-md bg-gray-300"
          >
            Load More Products
          </Button>
        ) : (
          <>
            <Button disabled className="bg-gray-100">
              Load More Products
            </Button>
            <span>Your Products are reached to 100</span>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default LoadMoreButton;
