export class Forecast {
  date: string;
  summary: string;
  temperatureC: number;
  temperatureF: number;

  constructor(
    date: string,
    summary: string,
    temperatureC: number,
    temperatureF: number
  ) {
    this.date = date;
    this.summary = summary;
    this.temperatureC = temperatureC;
    this.temperatureF = temperatureF;
  }
}
