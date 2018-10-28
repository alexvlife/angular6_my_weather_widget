import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { SocialInfoComponent } from './components/social-info/social-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    SocialInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
