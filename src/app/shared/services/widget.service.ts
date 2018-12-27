import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(
    private _http: HttpClient
  ) { }

  public getHotels(): Observable<Hotel[]> {
    return this._http.get<Hotel[]>(environment.dataUrl);
  }
}
