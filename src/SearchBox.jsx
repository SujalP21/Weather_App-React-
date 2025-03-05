import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState('');
    let [error , setError] = useState(false);

    const API_URL =  import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY =  import.meta.env.VITE_WEATHER_API_KEY

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRsponse = await response.json();
        let result = {
            city :city,
            temp : jsonRsponse.main.temp,
            tempMin : jsonRsponse.main.temp_min,
            tempMax : jsonRsponse.main.temp_max,
            humidity : jsonRsponse.main.humidity,
            pressure : jsonRsponse.main.pressure,
            windSpeed : jsonRsponse.wind.speed,
            feelsLike : jsonRsponse.main.feels_like,
            weather : jsonRsponse.weather[0].description,
        };
        console.log(result);
        return result;
        } catch (error) {
            throw error;
        }
    };


    let handleChanges = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
        try{
        e.preventDefault();
        console.log(city);
        setCity('');
      let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChanges}/>
        <br /> <br />
        <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p style={{color : "red"}}>City Not Found</p>}
        </form>
        </div>
    )
    }