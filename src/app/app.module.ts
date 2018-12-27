import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatIconModule,
} from '@angular/material';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetCardComponent } from './widget/widget-card/widget-card.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetCardComponent,
    WeatherComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PerfectScrollbarModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
