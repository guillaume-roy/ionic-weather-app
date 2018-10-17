import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/Storage';
import { ICity } from '../../models/city';
import { config } from '../../assets/config';

/*
  Generated class for the CitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitiesProvider {
  STORAGE_KEY = "CITIES";

  constructor(
    private geolocation: Geolocation,
    private http: HttpClient,
    private storage: Storage) {
  }

  /**
   * Search if a city exists based on a search query
   * @param query
   */
  search(query: string): Promise<ICity> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${config.openWeatherMapApiKey}&units=metric&lang=fr`)
      .toPromise().then((res: any) => {
        return Promise.resolve(<ICity>{
          id: res.id,
          name: res.name,
          country: res.sys.country
        });
      });
  }

  /**
   * Get current geolocation position
   */
  getGeolocationCity() {
    return this.geolocation.getCurrentPosition()
      .then(resp => Promise.resolve(resp.coords))
      .catch(error => Promise.reject(error));
  }

  /**
   * Get boorkmarked cities
   */
  getAllFromBookmarked(): Promise<ICity[]> {
    return this.storage.get(this.STORAGE_KEY).then(cities => {
      return JSON.parse(cities) || [];
    });
  }

  /**
   * Delete a city in bookmarks
   * @param city
   */
  deleteInBookmark(city: ICity): Promise<void> {
    return this.getAllFromBookmarked().then(cities => {
      this.storage.set(
        this.STORAGE_KEY,
        JSON.stringify(cities.filter(c => c.id !== city.id)));
    });
  }

  /**
   * Save a city in bookmarks
   * @param city
   */
  saveInBookmark(city: ICity): Promise<void> {
    return this.getAllFromBookmarked().then(cities => {
      if (!cities.some(c => c.id === city.id))
        cities.push(city);
      this.storage.set(this.STORAGE_KEY, JSON.stringify(cities));
    });
  }
}
