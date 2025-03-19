import React, { useEffect, useState } from "react";
import "./Weather.css";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
export default function Weather() {
  const [weather, setData] = useState();
  const [city, setCity] = useState("Bukhara");
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ff55054f53ec5c371bb065ff9e9f223`
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error();
    }
  };
  useEffect(() => {
    fetchWeather();
    console.log("nimadir");
  }, []);
  return (
    <div className="weather">
      <div className=" search-bar flex items-center gap-3">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Search"
          className=""
        />
        <CiSearch
          onClick={() => fetchWeather()}
          className="w-[25px] h-[25px] "
        />
      </div>
      <img className=" w-[100px] my-[50px]" src="public/image.png" alt="" />
      <p className="text-white text-[80px] leading-none">
        {(weather?.main?.temp - 273).toFixed(1)}°C
      </p>
      <p className="text-white text-[40px]">{weather?.name}</p>

      <div className="  text-white flex gap-5 ">
        <div className="flex gap-3">
          <img src="/humidity.png" alt="" className="w-[30px] h-[30px]" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="flex gap-3 ">
          <img src="/wind.png" alt="" className="w-[30px] h-[30px]" />
          <div>
            <p>3.6km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
