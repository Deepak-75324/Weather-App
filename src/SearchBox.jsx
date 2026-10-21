
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e202be505787fa6013591af4e77bd12c";


    const getWeatherInfo = async (cityName) => {
        try {
            const response = await fetch(
                `${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
            );
            const jsonResponse = await response.json();
            if (!response.ok) {
                throw new Error(
                    jsonResponse.message || "Failed to fetch weather"
                );
            }
            console.log(jsonResponse);
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                fellslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;

        } catch (error) {
            throw error;
        }
    };



    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            const searchedCity = city.trim();  // remove whitspace from start and end
            if (!searchedCity) return;
            let newInfo = await getWeatherInfo(searchedCity);
            updateInfo(newInfo);
            setCity("");
        }catch(error){
            setError(true);
        }
    };

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Search City..."
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />

                <br />
                <br />

                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                >
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No such place exists in our API!</p>}
                
            </form>
        </div>
    );
}
