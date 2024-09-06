import { Forecast } from "./forecast.js";

const getButton = document.getElementById("getForecastBtn");
const output = document.getElementById("output");

const getForecast = async () => {
  const url = "http://localhost:5241/WeatherForecast";

  let forecasts: Forecast[] = [];

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    json.forEach(
      (x: {
        date: string;
        summary: string;
        temperatureC: number;
        temperatureF: number;
      }) =>
        forecasts.push(
          new Forecast(x.date, x.summary, x.temperatureC, x.temperatureF)
        )
    );
  } catch (error: any) {
    console.error(error.message);
  }

  return forecasts;
};

const displayForecast = (forecasts: Forecast[]) => {
  if (output) {
    output.innerHTML = forecasts
      .map(forecast => `
        <tr>
          <td>${forecast.date}: </td>
          <td>${forecast.temperatureF}°F</td>
          <td>${forecast.summary}</td>
        </tr>
      `).join("");
  }
};

const printForecast = async () => {
  const forecasts = await getForecast();
  displayForecast(forecasts);
};

getButton?.addEventListener("click", printForecast);
