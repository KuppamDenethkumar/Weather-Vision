import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import MapView from "./components/MapView";
import "./App.css";

const apiKey = "ef75f4c424938c5c07be7fba76956555";

function App() {
  const [weather, setWeather] = useState(null);
  const [coords, setCoords] = useState(null);
  const [bg, setBg] = useState(
    "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9')"
  );

  // 🌧️ Rain animation state
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      fetchByCoords(pos.coords.latitude, pos.coords.longitude);
    });
  }, []);

  // 🌄 Background + rain logic
  const updateBackground = (data) => {
    let weather = data.weather[0].main;
    let temp = data.main.temp;

    if (weather === "Rain") {
      setBg("url('https://images.unsplash.com/photo-1501691223387-dd0500403074')");
      setIsRaining(true);
    } 
    else if (weather === "Clouds") {
      setBg("url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63')");
      setIsRaining(false);
    } 
    else if (temp > 30) {
      setBg("url('https://images.unsplash.com/photo-1502082553048-f009c37129b9')");
      setIsRaining(false);
    } 
    else {
      setBg("url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')");
      setIsRaining(false);
    }
  };

  const fetchByCoords = async (lat, lon) => {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    setWeather(res.data);
    setCoords({ lat, lon });
    updateBackground(res.data);
  };

  const fetchWeather = async (city) => {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    setWeather(res.data);
    setCoords(res.data.coord);
    updateBackground(res.data);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: bg,
      }}
    >
      {/* 🌧️ Rain Animation */}
      {isRaining && <div className="rain"></div>}

      {!weather && (
        <h2 className="welcome">
          🌤️ Search a city or allow location
        </h2>
      )}

      <Search onSearch={fetchWeather} />

      {weather && (
        <>
          <WeatherCard data={weather} />
          <Forecast coords={coords} />
          <MapView coords={coords} />
        </>
      )}
    </div>
  );
}

export default App;