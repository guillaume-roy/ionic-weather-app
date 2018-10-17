import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CitiesProvider } from '../../providers/cities/cities';
import { ModalController } from 'ionic-angular';
import { AddCityComponent } from '../../components/add-city/add-city';
import { WeatherProvider } from '../../providers/weather/weather';
import { ICityWeather } from '../../models/city-weather';
import { CityPage } from '../city/city';

/**
 * Generated class for the CitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class CitiesPage {
  weathers: ICityWeather[] = [];
  localWeather: ICityWeather = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private citiesProvider: CitiesProvider,
    private weatherProvider: WeatherProvider,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.loadData();
  }

  addCity() {
    const modal = this.modalCtrl.create(AddCityComponent);
    modal.onDidDismiss(newCity => {
      if (!!newCity) {
        this.citiesProvider.saveInBookmark(newCity)
          .then(() => this.loadBookmarkedCities());
      }
    });
    modal.present();
  }

  loadBookmarkedCities() {
    this.citiesProvider.getAllFromBookmarked()
      .then(cities => this.weatherProvider.getWeather(cities)
        .then(weathers => {
          this.weathers = weathers;
        }));
  }

  loadData(refresherEvent?: any) {
    //refresherEvent is used for pull-to-refresh feature
    Promise.all([
      this.citiesProvider.getGeolocationCity().then(coord => {
        this.weatherProvider.getWeatherFromCoord(coord.longitude, coord.latitude)
          .then(localWeather => this.localWeather = localWeather);
      }),
      this.loadBookmarkedCities()]).then(() => {
        if (!!refresherEvent) {
          refresherEvent.complete();
        }
      });
  }

  goToCityDetail(cityWeather: ICityWeather) {
    this.navCtrl.push(CityPage, { cityWeather: cityWeather });
  }
}
