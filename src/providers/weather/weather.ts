import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICity } from '../../models/city';
import { ICityWeather } from '../../models/city-weather';
import { IWeatherValue } from '../../models/weather-value';
import { config } from '../../app/config';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(private http: HttpClient) {
  }

  /**
   * Return current weather for a list of cities
   * @param cities
   */
  getWeather(cities: ICity[]) {
    if (!cities || cities.length === 0)
      return Promise.resolve([]);

    return this.http.get(`https://api.openweathermap.org/data/2.5/group?id=${cities.map(c => c.id).join(",")}&appid=${config.openWeatherMapApiKey}&units=metric&lang=fr`)
      .toPromise().then((res: any) => {
        let weathers: ICityWeather[] = [];
        if (res && res.list && res.list.length > 0) {
          for (var i = 0; i < res.list.length; i++) {
            let currentWeather = res.list[i];
            weathers.push(this.convertWeather(currentWeather, false));
          }
        }
        return weathers;
      });
  }

  /**
   * Return current weather for geolocation data
   * @param longitude
   * @param latitude
   */
  getWeatherFromCoord(longitude: number, latitude: number) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.openWeatherMapApiKey}&units=metric&lang=fr`)
      .toPromise().then((res: any) => {
        return this.convertWeather(res, true);
      });
  }

  /**
   * Return forecast weather for a city
   * @param city
   */
  getForecastWeather(city: ICity) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?id=${city.id}&appid=${config.openWeatherMapApiKey}&units=metric&lang=fr`)
      .toPromise().then((res: any) => {
        let weathers: IWeatherValue[] = [];
        if (res && res.list && res.list.length > 0) {
          for (var i = 0; i < res.list.length; i++) {
            let currentWeather = res.list[i];

            //Hack to get only mid-day forecast
            if (currentWeather.dt_txt.indexOf("12:00:00") > -1) {
              weathers.push(this.convertForecastWeather(currentWeather));
            }
          }
        }
        return weathers;
      });
  }

  /**
   * Convert raw weather result from API
   * @param rawWeather
   * @param isLocal
   */
  private convertWeather(rawWeather: any, isLocal: boolean): ICityWeather {
    return {
      city: {
        id: rawWeather.id,
        country: rawWeather.sys.country,
        name: rawWeather.name,
        isLocal: isLocal
      },
      weather: {
        humidity: rawWeather.main.humidity,
        temperature: rawWeather.main.temp,
        windSpeed: this.convertWindSpeed(rawWeather.wind.speed),
        weatherDescription: rawWeather.weather[0].description,
        weatherType: rawWeather.weather[0].icon
      }
    };
  }

  /**
   * Convert raw forecast result from API
   * @param rawWeather
   */
  private convertForecastWeather(rawWeather: any): IWeatherValue {
    return {
      date: rawWeather.dt_txt,
      humidity: rawWeather.main.humidity,
      temperature: rawWeather.main.temp,
      windSpeed: this.convertWindSpeed(rawWeather.wind.speed),
      weatherDescription: rawWeather.weather[0].description,
      weatherType: rawWeather.weather[0].icon
    };
  }

  /**
   * Convert wind speed from m/s to km/h
   * @param windSpeed
   */
  private convertWindSpeed(windSpeed: number) {
    return windSpeed * 3.6;
  }

}
