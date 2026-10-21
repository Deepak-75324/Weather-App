import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        fellslike: 26.39,
        humidity: 45,
        temp: 26.39,
        temp_max: 26.39,
        temp_min: 26.39,
        weather: "Clear sky",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    );
}