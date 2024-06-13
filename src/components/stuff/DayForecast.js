import React, { useState, useEffect } from 'react';

const DayForecast = () => {

     // Define state to hold the fetched data
  const [weatherData, setWeatherData] = useState(null);
  // Define state to handle loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Set loading state to true when fetching starts
        setLoading(true);
        // Fetch data from an API endpoint
        const response = await fetch('https://63762cbf7e93bcb006c50ce9.mockapi.io/forecast');
        // Convert response to JSON format
        const jsonData = await response.json();
        // Update state with the fetched data
        setWeatherData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading state to false when fetching completes
        setLoading(false);
      }
    };

    // Call the fetchData function when component mounts
    fetchData();
  }, []); // Empty array as the second argument ensures that this effect runs only once when the component mounts

    return (

       <div>
           
            <pre>{ /*
            JSON.stringify(weatherData, null, 2) */}</pre>
           <p>{weatherData && weatherData.city_name}</p>
           {weatherData && weatherData.data && weatherData.data.length > 0 ? (
            <ul>
              {weatherData.data.map((day, index) => (
                <li key={index}>
                  <h3>{day.valid_date}</h3>
                  <div key={index} className='day'>
                    <div className='daily-weather'>
                        <div className="daily-weather-icon">{day.icon}</div>
                        <div className="daily-weather-details">{day.weather.description}</div>
                    </div>
                    <div className='max-temp'>
                        <div className="max-label">Max</div>
                        <div className="max-value">{day.max_temp}</div>
                    </div>
                    <div className='min-temp'>
                        <div className="min-label">Min</div>
                        <div className="min-value">{day.min_temp}</div>
                    </div>
                    <p>Cloud Cover: {day.clouds}%</p>
                    <p>Wind Speed: {day.wind_spd} m/s</p>
                </div>
                  {/* Add more weather details as needed */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No weather data available.</p>
          )}
       </div>

    );
    
};

export default DayForecast;
