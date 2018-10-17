webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_config__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WeatherProvider = /** @class */ (function () {
    function WeatherProvider(http) {
        this.http = http;
    }
    /**
     * Return current weather for a list of cities
     * @param cities
     */
    WeatherProvider.prototype.getWeather = function (cities) {
        var _this = this;
        if (!cities || cities.length === 0)
            return Promise.resolve([]);
        return this.http.get("https://api.openweathermap.org/data/2.5/group?id=" + cities.map(function (c) { return c.id; }).join(",") + "&appid=" + __WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* config */].openWeatherMapApiKey + "&units=metric&lang=fr")
            .toPromise().then(function (res) {
            var weathers = [];
            if (res && res.list && res.list.length > 0) {
                for (var i = 0; i < res.list.length; i++) {
                    var currentWeather = res.list[i];
                    weathers.push(_this.convertWeather(currentWeather, false));
                }
            }
            return weathers;
        });
    };
    /**
     * Return current weather for geolocation data
     * @param longitude
     * @param latitude
     */
    WeatherProvider.prototype.getWeatherFromCoord = function (longitude, latitude) {
        var _this = this;
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + __WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* config */].openWeatherMapApiKey + "&units=metric&lang=fr")
            .toPromise().then(function (res) {
            return _this.convertWeather(res, true);
        });
    };
    /**
     * Return forecast weather for a city
     * @param city
     */
    WeatherProvider.prototype.getForecastWeather = function (city) {
        var _this = this;
        return this.http.get("https://api.openweathermap.org/data/2.5/forecast?id=" + city.id + "&appid=" + __WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* config */].openWeatherMapApiKey + "&units=metric&lang=fr")
            .toPromise().then(function (res) {
            var weathers = [];
            if (res && res.list && res.list.length > 0) {
                for (var i = 0; i < res.list.length; i++) {
                    var currentWeather = res.list[i];
                    //Hack to get only mid-day forecast
                    if (currentWeather.dt_txt.indexOf("12:00:00") > -1) {
                        weathers.push(_this.convertForecastWeather(currentWeather));
                    }
                }
            }
            return weathers;
        });
    };
    /**
     * Convert raw weather result from API
     * @param rawWeather
     * @param isLocal
     */
    WeatherProvider.prototype.convertWeather = function (rawWeather, isLocal) {
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
    };
    /**
     * Convert raw forecast result from API
     * @param rawWeather
     */
    WeatherProvider.prototype.convertForecastWeather = function (rawWeather) {
        return {
            date: rawWeather.dt_txt,
            humidity: rawWeather.main.humidity,
            temperature: rawWeather.main.temp,
            windSpeed: this.convertWindSpeed(rawWeather.wind.speed),
            weatherDescription: rawWeather.weather[0].description,
            weatherType: rawWeather.weather[0].icon
        };
    };
    /**
     * Convert wind speed from m/s to km/h
     * @param windSpeed
     */
    WeatherProvider.prototype.convertWindSpeed = function (windSpeed) {
        return windSpeed * 3.6;
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cities_cities__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_add_city_add_city__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_weather_weather__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__city_city__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CitiesPage = /** @class */ (function () {
    function CitiesPage(navCtrl, navParams, citiesProvider, weatherProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.citiesProvider = citiesProvider;
        this.weatherProvider = weatherProvider;
        this.modalCtrl = modalCtrl;
        this.weathers = [];
        this.localWeather = null;
    }
    CitiesPage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    CitiesPage.prototype.addCity = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_add_city_add_city__["a" /* AddCityComponent */]);
        modal.onDidDismiss(function (newCity) {
            if (!!newCity) {
                _this.citiesProvider.saveInBookmark(newCity)
                    .then(function () { return _this.loadBookmarkedCities(); });
            }
        });
        modal.present();
    };
    CitiesPage.prototype.loadBookmarkedCities = function () {
        var _this = this;
        this.citiesProvider.getAllFromBookmarked()
            .then(function (cities) { return _this.weatherProvider.getWeather(cities)
            .then(function (weathers) {
            _this.weathers = weathers;
        }); });
    };
    CitiesPage.prototype.loadData = function (refresherEvent) {
        var _this = this;
        //refresherEvent is used for pull-to-refresh feature
        Promise.all([
            this.citiesProvider.getGeolocationCity().then(function (coord) {
                _this.weatherProvider.getWeatherFromCoord(coord.longitude, coord.latitude)
                    .then(function (localWeather) { return _this.localWeather = localWeather; });
            }),
            this.loadBookmarkedCities()
        ]).then(function () {
            if (!!refresherEvent) {
                refresherEvent.complete();
            }
        });
    };
    CitiesPage.prototype.goToCityDetail = function (cityWeather) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__city_city__["a" /* CityPage */], { cityWeather: cityWeather });
    };
    CitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cities',template:/*ion-inline-start:"E:\Dev\ionic-weather-app\src\pages\cities\cities.html"*/'<!--\n  Generated template for the CitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Cumulonimbus</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addCity()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="loadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item-divider color="light">Ma Position</ion-item-divider>\n    <button ion-item *ngIf="localWeather" (click)="goToCityDetail(localWeather)">\n      <ion-thumbnail item-start>\n        <img src="/assets/imgs/{{localWeather.weather.weatherType}}.svg">\n      </ion-thumbnail>\n      <h2>{{localWeather.city.name}} - {{localWeather.city.country}}</h2>\n      <p text-capitalize>{{localWeather.weather.weatherDescription}} - Humidité : {{localWeather.weather.humidity}} % - Vent :\n        {{localWeather.weather.windSpeed.toFixed(0)}}\n        km/h</p>\n      <h1 item-end>{{localWeather.weather.temperature.toFixed(0)}}°C</h1>\n    </button>\n    <ion-item-divider color="light">Favoris</ion-item-divider>\n    <button ion-item *ngFor="let w of weathers" (click)="goToCityDetail(w)">\n      <ion-thumbnail item-start>\n        <img src="/assets/imgs/{{w.weather.weatherType}}.svg">\n      </ion-thumbnail>\n      <h2>{{w.city.name}} - {{w.city.country}}</h2>\n      <p text-capitalize>{{w.weather.weatherDescription}} - Humidité : {{w.weather.humidity}} % - Vent : {{w.weather.windSpeed.toFixed(0)}}\n        km/h</p>\n      <h1 item-end>{{w.weather.temperature.toFixed(0)}}°C</h1>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Dev\ionic-weather-app\src\pages\cities\cities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cities_cities__["a" /* CitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_weather_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], CitiesPage);
    return CitiesPage;
}());

//# sourceMappingURL=cities.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    "openWeatherMapApiKey": "82eb800f0da158f50a9a227a9f3f4dab"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_cities_cities__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddCityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddCityComponent = /** @class */ (function () {
    function AddCityComponent(citiesProvider, viewCtrl) {
        this.citiesProvider = citiesProvider;
        this.viewCtrl = viewCtrl;
        this.citiesResult = [];
    }
    AddCityComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.inputSearch.setFocus();
        });
    };
    AddCityComponent.prototype.searchCities = function (ev) {
        var _this = this;
        var query = ev.target.value;
        if (query && query.trim() != '') {
            this.citiesProvider.search(query)
                .then(function (cities) { return _this.citiesResult = [cities]; })
                .catch(function (err) {
                _this.citiesResult = [];
            });
        }
        else {
            this.citiesResult = [];
        }
    };
    AddCityComponent.prototype.selectCity = function (city) {
        this.viewCtrl.dismiss(city);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Searchbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Searchbar */])
    ], AddCityComponent.prototype, "inputSearch", void 0);
    AddCityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-city',template:/*ion-inline-start:"E:\Dev\ionic-weather-app\src\components\add-city\add-city.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-searchbar #inputSearch placeholder="Rechercher une ville" (ionInput)="searchCities($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf="citiesResult.length > 0; else emptyBlock">\n    <button ion-item *ngFor="let city of citiesResult" (click)="selectCity(city)">\n      {{ city.name }} - {{ city.country }}\n    </button>\n  </ion-list>\n  <ng-template #emptyBlock>\n    <h5 text-center>\n      <i>Aucun résultat</i>\n    </h5>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"E:\Dev\ionic-weather-app\src\components\add-city\add-city.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_cities_cities__["a" /* CitiesProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]])
    ], AddCityComponent);
    return AddCityComponent;
}());

//# sourceMappingURL=add-city.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cities_cities__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CityPage = /** @class */ (function () {
    function CityPage(navCtrl, navParams, weatherProvider, citiesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.weatherProvider = weatherProvider;
        this.citiesProvider = citiesProvider;
        this.cityWeather = null;
        this.forecastWeathers = [];
    }
    CityPage.prototype.ionViewDidLoad = function () {
        this.cityWeather = this.navParams.get('cityWeather');
        this.loadWeather();
    };
    CityPage.prototype.deleteCity = function () {
        var _this = this;
        this.citiesProvider.deleteInBookmark(this.cityWeather.city)
            .then(function () { return _this.navCtrl.goToRoot({ isNavRoot: true, animate: true }); });
    };
    CityPage.prototype.loadWeather = function () {
        var _this = this;
        this.weatherProvider.getForecastWeather(this.cityWeather.city)
            .then(function (weathers) {
            _this.forecastWeathers = weathers;
        });
    };
    CityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-city',template:/*ion-inline-start:"E:\Dev\ionic-weather-app\src\pages\city\city.html"*/'<!--\n  Generated template for the CityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>{{cityWeather?.city?.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="deleteCity()" *ngIf="!cityWeather?.city?.isLocal">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item text-center text-capitalize>\n      <h2>{{cityWeather?.city?.name}} - {{cityWeather?.city?.country}}</h2>\n      <p>{{cityWeather?.weather?.weatherDescription}} - Humidité : {{cityWeather?.weather?.humidity}} % - Vent :\n        {{cityWeather?.weather?.windSpeed.toFixed(0)}}\n        km/h</p>\n      <h1 item-end>\n        {{cityWeather?.weather?.temperature.toFixed(0)}}°C\n      </h1>\n    </ion-item>\n    <img class="weather-icon" text-center src="/assets/imgs/{{cityWeather?.weather?.weatherType}}.svg" />\n  </ion-card>\n  <ion-list>\n    <ion-item-divider color="light">A Venir</ion-item-divider>\n    <ion-item *ngFor="let w of forecastWeathers">\n      <ion-thumbnail item-start>\n        <img src="/assets/imgs/{{w.weatherType}}.svg">\n      </ion-thumbnail>\n      <h2 text-capitalize>{{w.date | dfnsFormat : \'DD/MM/YYYY\'}}</h2>\n      <p text-capitalize>{{w.weatherDescription}} - Humidité : {{w.humidity}} % - Vent :\n          {{w.windSpeed.toFixed(0)}} km/h</p>\n      <h1 item-end>{{w.temperature.toFixed(0)}}°C</h1>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Dev\ionic-weather-app\src\pages\city\city.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cities_cities__["a" /* CitiesProvider */]])
    ], CityPage);
    return CityPage;
}());

//# sourceMappingURL=city.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(284);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_cities_cities__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_weather_weather__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cities_cities__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_city_city__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_city_add_city__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_Storage__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_date_fns__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* CumulonimbusApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cities_cities__["a" /* CitiesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_city_city__["a" /* CityPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_city_add_city__["a" /* AddCityComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* CumulonimbusApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_Storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ngx_date_fns__["a" /* DateFnsModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* CumulonimbusApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cities_cities__["a" /* CitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_city_add_city__["a" /* AddCityComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_city_city__["a" /* CityPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_cities_cities__["a" /* CitiesProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_weather_weather__["a" /* WeatherProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CumulonimbusApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cities_cities__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CumulonimbusApp = /** @class */ (function () {
    function CumulonimbusApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_cities_cities__["a" /* CitiesPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    CumulonimbusApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Dev\ionic-weather-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Dev\ionic-weather-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], CumulonimbusApp);
    return CumulonimbusApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_config__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CitiesProvider = /** @class */ (function () {
    function CitiesProvider(geolocation, http, storage) {
        this.geolocation = geolocation;
        this.http = http;
        this.storage = storage;
        this.STORAGE_KEY = "CITIES";
    }
    /**
     * Search if a city exists based on a search query
     * @param query
     */
    CitiesProvider.prototype.search = function (query) {
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + __WEBPACK_IMPORTED_MODULE_4__assets_config__["a" /* config */].openWeatherMapApiKey + "&units=metric&lang=fr")
            .toPromise().then(function (res) {
            return Promise.resolve({
                id: res.id,
                name: res.name,
                country: res.sys.country
            });
        });
    };
    /**
     * Get current geolocation position
     */
    CitiesProvider.prototype.getGeolocationCity = function () {
        return this.geolocation.getCurrentPosition()
            .then(function (resp) { return Promise.resolve(resp.coords); })
            .catch(function (error) { return Promise.reject(error); });
    };
    /**
     * Get boorkmarked cities
     */
    CitiesProvider.prototype.getAllFromBookmarked = function () {
        return this.storage.get(this.STORAGE_KEY).then(function (cities) {
            return JSON.parse(cities) || [];
        });
    };
    /**
     * Delete a city in bookmarks
     * @param city
     */
    CitiesProvider.prototype.deleteInBookmark = function (city) {
        var _this = this;
        return this.getAllFromBookmarked().then(function (cities) {
            _this.storage.set(_this.STORAGE_KEY, JSON.stringify(cities.filter(function (c) { return c.id !== city.id; })));
        });
    };
    /**
     * Save a city in bookmarks
     * @param city
     */
    CitiesProvider.prototype.saveInBookmark = function (city) {
        var _this = this;
        return this.getAllFromBookmarked().then(function (cities) {
            if (!cities.some(function (c) { return c.id === city.id; }))
                cities.push(city);
            _this.storage.set(_this.STORAGE_KEY, JSON.stringify(cities));
        });
    };
    CitiesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_Storage__["b" /* Storage */]])
    ], CitiesProvider);
    return CitiesProvider;
}());

//# sourceMappingURL=cities.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.js.map