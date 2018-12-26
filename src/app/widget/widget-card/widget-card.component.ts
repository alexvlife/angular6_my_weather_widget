import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../shared/models/hotel';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit() {
    console.log('Hotel', this.hotel)
  }

}
