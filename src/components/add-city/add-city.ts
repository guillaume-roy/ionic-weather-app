import { Component, ViewChild } from '@angular/core';
import { ICity } from '../../models/city';
import { CitiesProvider } from '../../providers/cities/cities';
import { Searchbar, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddCityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-city',
  templateUrl: 'add-city.html'
})
export class AddCityComponent {
  @ViewChild(Searchbar) inputSearch: Searchbar;
  citiesResult: ICity[] = [];

  constructor(private citiesProvider: CitiesProvider, public viewCtrl: ViewController) {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.inputSearch.setFocus();
    });
  }

  searchCities(ev: any) {
    const query = ev.target.value;
    if (query && query.trim() != '') {
      this.citiesProvider.search(query)
        .then(cities => this.citiesResult = [cities])
        .catch(err => {
          this.citiesResult = [];
        });
    } else {
      this.citiesResult = [];
    }
  }

  selectCity(city: ICity) {
    this.viewCtrl.dismiss(city);
  }
}
