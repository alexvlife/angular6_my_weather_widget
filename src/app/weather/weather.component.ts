import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../shared/models/hotel';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input() currentHotel: Hotel;

}
