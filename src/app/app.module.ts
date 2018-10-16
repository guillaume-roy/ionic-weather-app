import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CumulonimbusApp } from './app.component';
import { CitiesProvider } from '../providers/cities/cities';
import { WeatherProvider } from '../providers/weather/weather';
import { CitiesPage } from '../pages/cities/cities';
import { CityPage } from '../pages/city/city';

@NgModule({
  declarations: [
    CumulonimbusApp,
    CitiesPage,
    CityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CumulonimbusApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CumulonimbusApp,
    CitiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CitiesProvider,
    WeatherProvider
  ]
})
export class AppModule {}
