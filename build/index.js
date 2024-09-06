var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Forecast } from "./forecast.js";
const getButton = document.getElementById("getForecastBtn");
const output = document.getElementById("output");
const getForecast = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "http://localhost:5241/WeatherForecast";
    let forecasts = [];
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = yield response.json();
        json.forEach((x) => forecasts.push(new Forecast(x.date, x.summary, x.temperatureC, x.temperatureF)));
    }
    catch (error) {
        console.error(error.message);
    }
    return forecasts;
});
const displayForecast = (forecasts) => {
    if (output) {
        output.innerHTML = forecasts
            .map((forecast) => `
        <tr>
        <td>${forecast.date}: </td>
        <td>${forecast.temperatureF}°F</td>
        <td>${forecast.summary}</td>
        </tr>
      `)
            .join("");
    }
};
const printForecast = () => __awaiter(void 0, void 0, void 0, function* () {
    const forecasts = yield getForecast();
    displayForecast(forecasts);
});
getButton === null || getButton === void 0 ? void 0 : getButton.addEventListener("click", printForecast);
