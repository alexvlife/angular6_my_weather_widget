import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetCardComponent } from './widget/widget-card/widget-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
