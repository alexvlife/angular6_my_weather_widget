import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../shared/models/hotel';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() currentHotel: Hotel;

  public imagesPath: string = '../../assets/images/';
  public defaultImageUrl: string = '../../assets/images/no-photo.jpg';

  public hotelImageUrl: string = '';

  ngOnInit(): void {
    this.initHotelImageUrl();
  }

  initHotelImageUrl(): void {
    if (this.currentHotel) {
      this.hotelImageUrl = (this.currentHotel.socialInfo && this.currentHotel.socialInfo.image) ?
        this.getImagePath(this.currentHotel.socialInfo.image) : this.defaultImageUrl;
    }
  }

  getImagePath(imageName: string): string {
    return this.imagesPath + imageName;
  }

}
