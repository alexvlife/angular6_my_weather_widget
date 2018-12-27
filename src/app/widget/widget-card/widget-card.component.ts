import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../shared/models/hotel';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent implements OnInit {

  @Input() hotel: Hotel;

  public imagesPath: string = '../../../assets/images/';
  public defaultImageUrl: string = '../../../assets/images/no-photo.jpg';

  public hotelImageData: {[key: string]: string} = {
    url1: '',
    url2: '',
  };

  constructor() { }

  ngOnInit(): void {
    this.initHotelImageData();
  }

  initHotelImageData(): void {
    if (this.hotel) {
      this.hotelImageData.url1 = this.hotel.image ?
        this.getImagePath(this.hotel.image) : this.defaultImageUrl;
      this.hotelImageData.url2 = (this.hotel.socialInfo && this.hotel.socialInfo.image) ?
        this.getImagePath(this.hotel.socialInfo.image) : this.defaultImageUrl;
    }
  }

  getImagePath(imageName: string): string {
    return this.imagesPath + imageName;
  }
}
