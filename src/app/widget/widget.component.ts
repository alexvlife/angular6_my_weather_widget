import { Component, Input } from '@angular/core';

import { WidgetService } from '../shared/services/widget.service';
import { Hotel, HotelType } from '../shared/models/hotel';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  @Input() hotels: Hotel[] = [];
  
  @Input() currentHotel: Hotel;

  public navigationItems: Array<HotelType | 'ALL'> = [
    'ALL',
    HotelType.MOUNTAINS,
    HotelType.SEA,
    HotelType.FISHING,
    HotelType.TOUR,
  ];

  //filter
  public currentHotelType: HotelType | 'ALL' = 'ALL';

  constructor(
    private _widgetService: WidgetService,
  ) {}

  onWidgetCardClick(hotel: Hotel): void {
    this.changeCurrentHotel(hotel);
  }

  changeCurrentHotel(hotel: Hotel): void {
    this._widgetService.currentHotel = hotel;
  }

}
