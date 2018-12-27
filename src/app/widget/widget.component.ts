import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WidgetService } from '../shared/services/widget.service';
import { Hotel, HotelType } from '../shared/models/hotel';
import { WeatherType } from '../shared/models/weather';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit, OnDestroy {

  // subscription
  private _hotels$: Observable<Hotel[]>;
  private _ngUnsubscribe: Subject<any> = new Subject();

  // data for ui
  public hotels: Hotel[] = [];
  public navigationItems: Array<HotelType | 'ALL'> = [
    'ALL',
    HotelType.MOUNTAINS,
    HotelType.SEA,
    HotelType.FISHING,
    HotelType.TOUR,
  ];

  //filter
  public currentHotelType: HotelType | 'ALL' = 'ALL';

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

  constructor(
    private _widgetService: WidgetService,
  ) {
    this._hotels$ = this._widgetService.getHotels();
  }

  ngOnInit(): void {
    this._hotels$
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((hotels: Hotel[]) => {
        console.log('WidgetComponent, ngOnInit():');
        console.log('hotels', hotels);
        this.hotels = hotels;
        console.log('this.hotels', this.hotels);
      });
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

}
