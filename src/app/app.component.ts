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
    this.subscribeOnHotelsData();
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  subscribeOnHotelsData(): void {
    this._hotels$
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((hotels: Hotel[]) => {
        console.log('AppComponent, ngOnInit():');
        console.log('hotels', hotels);
        this.initHotels(hotels);
        console.log('this.hotels', this.hotels);
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
    this.currentHotel = this.hotels[0];
  }
}
