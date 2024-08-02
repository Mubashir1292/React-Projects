import React, { useEffect, useState } from "react";
import { FaCloudSun, FaCloudShowersHeavy } from "react-icons/fa";
import { WiSmoke } from "react-icons/wi";
function Weather({ cityName }) {
  const [weatherReport, setWeatherReport] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [iconForClouds, setIconForClouds] = useState("");
  const fetchingWeather = async (searchParams) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchParams}&appid=9673632179b91567d194552a0152ba18`
      );
      const result = await response.json();
      console.log(result);
      if (typeof result === "object") {
        setWeatherReport(result);
        setLoading(false);
        if (weatherReport?.weather[0].main === "Clouds") {
          setIconForClouds(<FaCloudSun />);
        } else if (
          weatherReport?.weather[0].main === "Rain" ||
          weatherReport?.weather[0].main === "Drizzle" ||
          weatherReport?.weather[0].main === "Thunderstorm"
        ) {
          setIconForClouds(<FaCloudShowersHeavy />);
        } else if (weatherReport?.weather[0].main === "Smoke") {
          setIconForClouds(<WiSmoke />);
        }
      } else {
        setError(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  useEffect(() => {
    fetchingWeather(cityName);
  }, [cityName]);
  useEffect(() => {
    fetchingWeather("london");
  }, []);

  return (
    <div className="flex flex-col  ">
      {error ? <span>{error.message}</span> : null}
      {!loading ? (
        <div className="flex flex-col space-y-2  w-full h-96 p-5">
          <div className="flex justify-center items-center flex-col">
            <span className="text-[100px] text-white font-bold">
              {iconForClouds}
            </span>
            <span className="text-xl text-black">
              {weatherReport?.name},{weatherReport?.sys?.country}
            </span>
            <span className="text-xs text-black ">
              {getCurrentDate() || null}
            </span>
          </div>
          <div className="flex flex-col justify-around items-center  ">
            <span className="text-4xl text-black">
              {weatherReport?.main?.temp}
            </span>
            <span className="text-sm text-black flex justify-center items-center space-x-3">
              <span> Max: {weatherReport?.main?.temp_max}</span>
              <span> Min: {weatherReport?.main?.temp_min} </span>
            </span>
          </div>
          <div className="flex flex-col justify-around items-center ">
            <span className="text-2xl font-bold text-black">
              {weatherReport.weather && weatherReport.weather[0].description}
            </span>
            <span className=" text-black font-thin text-lg">
              {weatherReport.weather && weatherReport?.weather[0].main}
            </span>
          </div>
        </div>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
}

export default Weather;
