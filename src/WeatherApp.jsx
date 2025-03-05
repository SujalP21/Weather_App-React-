import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Bikaner",
        feelsLike: 25.21,
        humidity: 56,
        pressure: 6,
        temp: 24.5,
        tempMax: 29.8,
        tempMin: 19.8,
        weather: "Cloudy",
        windSpeed: 5.3,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp" style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            </div>
    );
}