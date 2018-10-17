import { ICity } from "./city";
import { IWeatherValue } from "./weather-value";

export interface ICityWeather {
  city: ICity;
  weather: IWeatherValue;
}
