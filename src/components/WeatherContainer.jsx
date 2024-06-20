import React from 'react';

const WeatherContainer = ({ loading, weatherData }) => {
  return (
    <div>
        {/*Display weatherData if possible*/}
        {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>No weather data available</p>
      )};
      
      {/*Loading*/}
      {loading && <p>Loading weather data...</p>}
    </div>
  );
};

export default WeatherContainer;