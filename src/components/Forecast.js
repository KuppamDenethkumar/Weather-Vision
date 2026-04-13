import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "ef75f4c424938c5c07be7fba76956555";

export default function Forecast({ coords }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!coords) return;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`
      )
      .then((res) => {
        let list = res.data.list.filter((_, i) => i % 8 === 0);
        setData(list);
      });
  }, [coords]);

  return (
    <div className="forecast">
      {data.map((item, i) => (
        <div key={i} className="fcard">
          <div>
            {new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </div>
          <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
          <div>{item.main.temp}°C</div>
        </div>
      ))}
    </div>
  );
}