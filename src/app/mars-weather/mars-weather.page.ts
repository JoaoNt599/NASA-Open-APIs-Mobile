import { Component, OnInit } from '@angular/core';
import { MarsWeatherService } from '../services/mars-weather.service';

@Component({
  selector: 'app-mars-weather',
  templateUrl: './mars-weather.page.html',
  styleUrls: ['./mars-weather.page.scss'],
})
export class MarsWeatherPage implements OnInit {
  marsWeather: any;
  errorMessage!: string;

  constructor(private marsWeatherService: MarsWeatherService) { }

  ngOnInit() {
    this.marsWeatherService.getMarsWeather().subscribe(
      data => {
        this.marsWeather = data;
      },
      error => {
        this.errorMessage = 'Mars climate data could not be loades.';
      }
    );
  }
}
