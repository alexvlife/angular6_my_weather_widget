import { Component } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WidgetService } from './shared/services/widget.service';
import { Hotel } from './shared/models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // data for ui
  public hotels: Hotel[] = [];
  public currentHotel: Hotel;
  public pageTitle: string = 'My Weather Widget';

  // subscription
  private _hotels$: Observable<Hotel[]>;
  private _ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private _widgetService: WidgetService,
  ) {
    this._hotels$ = this._widgetService.getHotels();
  }

  ngOnInit(): void {
    this.subscribeToHotelsData();
    this.subscribeToCurrentHotelChanged();
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  subscribeToHotelsData(): void {
    this._hotels$
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((hotels: Hotel[]) => {
        this.initHotels(hotels);
        this.initCurrentHotel();
      });
  }

  initHotels(hotels: Hotel[]): void {
    this.hotels = hotels;
  }

  initCurrentHotel(): void {
    if (this.hotels.length < 1) {
      return;
    }
    this._widgetService.currentHotel = this.hotels[0];
  }

  subscribeToCurrentHotelChanged(): void {
    this._widgetService.currentHotelChanged
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe(() => {
        this.currentHotel = this._widgetService.currentHotel;
      });
  }
}
