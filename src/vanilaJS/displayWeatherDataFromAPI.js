<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather Details</title>
</head>
<body>
  <div id="weather-details">
    <h1>Weather Details</h1>
    <div id="weather-info"></div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const weatherData = {
        city_name: "West Donny",
        country_code: "GB",
        data: [
          {
            app_max_temp: 11.9,
            app_min_temp: 7.6,
            clouds: 80,
            datetime: "2022-11-17",
            dewpt: 6.2,
            high_temp: 11,
            low_temp: 6.7,
            max_temp: 11.9,
            min_temp: 7.6,
            temp: 8.9,
            weather: {
              description: "Light shower rain",
              icon: "r04d",
              code: 520
            },
            wind_cdir: "WSW",
            wind_cdir_full: "west-southwest",
            wind_dir: 258,
            wind_gust_spd: 12,
            wind_spd: 6.8
          },
          {
            app_max_temp: 10.1,
            app_min_temp: 1.8,
            clouds: 57,
            datetime: "2022-11-18",
            dewpt: 5.3,
            high_temp: 10.1,
            low_temp: 3.4,
            max_temp: 10.1,
            min_temp: 4.5,
            temp: 7.4,
            weather: {
              description: "Broken clouds",
              icon: "c03d",
              code: 803
            },
            wind_cdir: "W",
            wind_cdir_full: "west",
            wind_dir: 264,
            wind_gust_spd: 8.3,
            wind_spd: 5
          },
          // ... other data objects ...
        ],
        lat: "51.51279",
        lon: "-0.09184",
        state_code: "ENG",
        timezone: "Europe/London"
      };

      function displayWeatherData(data) {
        const weatherInfo = document.getElementById('weather-info');
        const cityInfo = `<h2>${data.city_name}, ${data.state_code}, ${data.country_code}</h2>`;
        weatherInfo.insertAdjacentHTML('beforeend', cityInfo);

        if (data.data && data.data.length > 0) {
          const weatherList = document.createElement('ul');
          data.data.forEach(day => {
            const weatherItem = document.createElement('li');
            weatherItem.innerHTML = `
              <h3>${day.datetime}</h3>
              <p>Description: ${day.weather.description}</p>
              <p>Temperature: ${day.temp}°C</p>
              <p>Max Temperature: ${day.max_temp}°C</p>
              <p>Min Temperature: ${day.min_temp}°C</p>
              <p>Cloud Cover: ${day.clouds}%</p>
              <p>Wind Speed: ${day.wind_spd} m/s</p>
            `;
            weatherList.appendChild(weatherItem);
          });
          weatherInfo.appendChild(weatherList);
        } else {
          weatherInfo.innerHTML += '<p>No weather data available.</p>';
        }
      }

      displayWeatherData(weatherData);
    });
  </script>
</body>
</html>
