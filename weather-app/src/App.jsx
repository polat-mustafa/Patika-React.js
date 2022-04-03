import WeatherContext from "./context/WeatherContext"
import { useContext, useEffect, useState } from "react"
import './App.css'



function App() {
  const { weather, getWeather, loading } = useContext(WeatherContext)
  const [city, setCity] = useState("")


  const textInput = (e) => {
    if (e.target.value.length > 0) {
      setCity(e.target.value)
      localStorage.setItem("city", e.target.value)
    }
  }

  useEffect(() => {
    const citys = localStorage.getItem("city")
    getWeather(citys)
  }, [city])

  const img = `http://openweathermap.org/img/w/${weather.icon}.png`

  return (
    <div className="App">
      <h1>Hava Durumu</h1>
      <input type="text" onChange={textInput} placeholder='Şehir' />
      {
        loading ? (
          <div>
            <h2>Lütfen şehri giriniz...</h2>
          </div>
        ) : (

          <div id="weather-body">
            <span><img src={img} /></span>
            <br />
            
            <span>{weather.name}</span>{" , "}<span>{weather.country}</span>
            <br />
            <hr />
            <span>Hava {weather.description}</span>
            <br />
            <hr />
            <span>Şu an: {Math.round(weather.temp)}&#8451;</span>
            {" / "}
            <span>Hissedilen Sıcaklık: {weather.feels}&#8451;</span>

          </div>
        )
      }
    </div>
  )

}

export default App


