import { Component, OnInit } from '@angular/core';
import { Hotel, HotelType } from '../shared/models/hotel';
import { WeatherType } from '../shared/models/weather';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  public hotel: Hotel = {
    id: 1,
    types: [HotelType.MOUNTAINS, HotelType.TOUR],
    image: 'hotel1_img1.png',
    address: 'Hotel place 1, City name, Country name',
    phone: '1234567890',
    weatherInfo: {
      'type': WeatherType.SUNNY,
      'airTemperature': 35,
      'waterTemperature': 30,
      'icon': 'icon'
    },
    socialInfo: {
      title: 'Hotel 1',
      image: 'hotel1_img2.png',
      followers: 9888,
      following: 1976
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
