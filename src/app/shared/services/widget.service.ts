import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  public currentHotelChanged = new Subject<Hotel>();

  private _currentHotel: Hotel;

  constructor(
    private _http: HttpClient,
  ) { }

  get currentHotel() {
    return this._currentHotel;
  }

  set currentHotel(choosenHotel: Hotel) {
    this._currentHotel = choosenHotel;
    this.currentHotelChanged.next();
  }

  public getHotels(): Observable<Hotel[]> {
    return this._http.get<Hotel[]>(environment.dataUrl);
  }
}
