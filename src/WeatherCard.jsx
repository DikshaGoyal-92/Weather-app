export default function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>
        {data.name}, {data.sys.country}
      </h2>

      <h1>{Math.round(data.main.temp)}°C</h1>

      <p>{data.weather[0].main}</p>

      <div className="info">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}