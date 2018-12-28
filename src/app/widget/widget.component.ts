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
    HotelType.SEA,
    HotelType.FISHING,
    HotelType.MOUNTAINS,
    HotelType.TOUR,
  ];

  //filter
  public currentHotelType: HotelType | 'ALL' = 'ALL';

  constructor(
    private _widgetService: WidgetService,
  ) {}

  onNavigationItemClick(hotelType: HotelType | 'ALL'): void {
    this.changeCurrentHotelType(hotelType);
    this.changeCurrentHotel(this.defineCurrentHotel(hotelType));
  }

  onWidgetCardClick(hotel: Hotel): void {
    this.changeCurrentHotel(hotel);
  }

  changeCurrentHotelType(hotelType: HotelType | 'ALL'): void {
    this.currentHotelType = hotelType;
  }

  changeCurrentHotel(hotel: Hotel): void {
    this._widgetService.currentHotel = hotel;
  }

  defineCurrentHotel(hotelType: HotelType | 'ALL'): Hotel {
    if (hotelType === 'ALL') {
      return this.hotels[0];
    }

    const currentTypeHotels: Hotel[] = this.hotels.filter((hotel: Hotel) => hotel.types.includes(hotelType));
    return currentTypeHotels[0];
  }

}
