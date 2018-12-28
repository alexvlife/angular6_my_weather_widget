import { Component, Input } from '@angular/core';

import { Hotel } from '../shared/models/hotel';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  @Input() currentHotel: Hotel;

}
