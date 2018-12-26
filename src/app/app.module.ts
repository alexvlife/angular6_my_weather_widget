import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetCardComponent } from './widget/widget-card/widget-card.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetCardComponent,
  ],
  imports: [
    BrowserModule,
    PerfectScrollbarModule,
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
