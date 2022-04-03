import WeatherContext from "./context/WeatherContext";
import { useContext, useEffect, useState } from "react";
import "./App.css";

function App() {
  const { weather, getWeather, loading, time, dateTime } =
    useContext(WeatherContext);
  const [city, setCity] = useState("");

  const textInput = (e) => {
    if (e.key == "Enter" && e.target.value.length > 0) {
      setCity(e.target.value);
      localStorage.setItem("city", e.target.value);
    }
  };

  useEffect(() => {
    const citys = localStorage.getItem("city");
    getWeather(citys);
  }, [city]);

  return (
    <div className="App">
      <h1>Hava Durumu</h1>
      <input type="text" onKeyPress={textInput} placeholder="Şehir" />
      <h3>
        {" "}
        Bu tarihin güncel hava tahminidir: {dateTime} {time}
      </h3>
      {loading ? (
        <div>
          <h2>Lütfen şehri giriniz...</h2>
        </div>
      ) : (
        <div id="weather-body">
          <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
          <br />
          <div className="bodys">
            {" "}
            <span>{weather.name}</span>
            {" , "}
            <span>{weather.country}</span>
          </div>

          <br />
          <hr />
          <div className="bodys">
            {" "}
            <span>Hava {weather.description}</span>
          </div>

          <br />
          <hr />
          <div className="bodys">
            {" "}
            <span>Şu an: {Math.round(weather.temp)} &#8451;</span>
            {" | "}
            <span>
              Hissedilen Sıcaklık: {Math.round(weather.feels)} &#8451;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
