import './App.css';
import { useState, useEffect} from "react";
import { WEATHERAPIKEY } from './config';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  // using API call to fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHERAPIKEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // setting the City based on input
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // starting the API call after pressing submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherContainer loading={loading} weatherData={weatherData}/>
    </div>
  );
};

export default App;
