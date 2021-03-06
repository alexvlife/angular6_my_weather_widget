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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetCardComponent } from './widget/widget-card/widget-card.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelsFilterPipe } from './shared/pipes/hotels-filter.pipe';
import { UppercaseFirstLetterPipe } from './shared/pipes/uppercase-first-letter.pipe';

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
    HotelsFilterPipe,
    UppercaseFirstLetterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PerfectScrollbarModule,
    MatIconModule,
    AppRoutingModule,
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
