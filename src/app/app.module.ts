import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { CumulonimbusApp } from './app.component';
import { CitiesProvider } from '../providers/cities/cities';
import { WeatherProvider } from '../providers/weather/weather';
import { CitiesPage } from '../pages/cities/cities';
import { CityPage } from '../pages/city/city';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AddCityComponent } from '../components/add-city/add-city';
import { IonicStorageModule } from '@ionic/Storage';
import { DateFnsModule, DateFnsConfigurationService } from 'ngx-date-fns';
import * as frLocale from "date-fns/locale/fr/index.js";

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(frLocale);

@NgModule({
  declarations: [
    CumulonimbusApp,
    CitiesPage,
    CityPage,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CumulonimbusApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    DateFnsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CumulonimbusApp,
    CitiesPage,
    AddCityComponent,
    CityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CitiesProvider,
    WeatherProvider,
    Geolocation,
    { provide: DateFnsConfigurationService, useValue: frenchConfig }
  ]
})
export class AppModule { }
