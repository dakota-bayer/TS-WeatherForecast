const getButton = document.getElementById("getForecastBtn");

const getForecast = async () => {
  const url = "http://localhost:5241/WeatherForecast";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }
};

getButton?.addEventListener("click", getForecast);
