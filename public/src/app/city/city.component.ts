import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  imgName: string;
  humidity: number;
  temp: number;
  minTemp: number;
  maxTemp: number;
  cityName: string;
  weather: string;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.imgName = (params['city'] as string).replace(" ", "");
        this._httpService.getWeather(params['city']).subscribe(response => {
          this.cityName = response['name'];
          this.humidity = response['main']['humididty'];
          this.temp = response['main']['temp'];
          this.minTemp = response['main']['temp_min'];
          this.maxTemp = response['main']['temp_max'];
          this.weather = response['weather'][0]['main'];
        })
    });
  }

}
