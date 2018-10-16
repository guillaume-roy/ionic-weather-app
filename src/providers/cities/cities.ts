import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICity } from '../../models/city';

/*
  Generated class for the CitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitiesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CitiesProvider Provider');
  }

  search(query: string): Promise<ICity[]> {
    return Promise.resolve([]);
  }

  getAllFromBookmarked(): Promise<ICity[]> {
    return Promise.resolve([]);
  }

  deleteInBookmark(city: ICity): Promise<void> {
    return Promise.resolve();
  }

  saveInBookmark(city: ICity): Promise<void> {
    return Promise.resolve();
  }
}
