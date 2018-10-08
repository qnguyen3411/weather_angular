import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private ApiKey = "39697c26e3e10c08ea97f13f696cb5e3";
  constructor(private _http: HttpClient){}

  getWeather(cityName) {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.ApiKey}`);
  }
}
