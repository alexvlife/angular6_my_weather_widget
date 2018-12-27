import { Component, Input } from '@angular/core';

import { Hotel, HotelType } from '../shared/models/hotel';
import { WeatherType } from '../shared/models/weather';

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

  public imagesPath: string = '../../assets/images/';
  public defaultImageUrl: string = '../../assets/images/no-photo.jpg';

  public hotelImageUrl: string = '';

  ngOnInit(): void {
    this.initHotelImageUrl();
  }

  initHotelImageUrl(): void {
    if (this.currentHotel) {
      this.hotelImageUrl = this.currentHotel.image ?
        this.getImagePath(this.currentHotel.image) : this.defaultImageUrl;
    }
  }

  getImagePath(imageName: string): string {
    return this.imagesPath + imageName;
  }

}
