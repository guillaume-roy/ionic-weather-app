import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { CitiesProvider } from '../../providers/cities/cities';
import { ICityWeather } from '../../models/city-weather';
import { IWeatherValue } from '../../models/weather-value';

/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
  cityWeather: ICityWeather = null;
  forecastWeathers: IWeatherValue[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private weatherProvider: WeatherProvider,
    private citiesProvider: CitiesProvider) {
  }

  ionViewDidLoad() {
    this.cityWeather = this.navParams.get('cityWeather');
    this.loadWeather();
  }

  deleteCity() {
    this.citiesProvider.deleteInBookmark(this.cityWeather.city)
      .then(() => this.navCtrl.goToRoot({ isNavRoot: true, animate: true }));
  }

  private loadWeather() {
    this.weatherProvider.getForecastWeather(this.cityWeather.city)
      .then(weathers => {
        this.forecastWeathers = weathers;
      });
  }
}
