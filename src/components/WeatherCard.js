export default function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} />
      <div className="temp">{data.main.temp}°C</div>
      <div>{data.weather[0].main}</div>
    </div>
  );
}