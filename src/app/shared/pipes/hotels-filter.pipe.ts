import { Pipe, PipeTransform } from '@angular/core';

import { Hotel, HotelType } from '../models/hotel';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  transform(hotels: Hotel[], hotelType: HotelType | 'ALL'): Hotel[] {
    if (!hotels || hotels.length === 0 || !hotelType || hotelType === 'ALL') {
      return hotels;
    }

    const filteredHotels: Hotel[] = hotels.filter((hotel: Hotel) => hotel.types.includes(hotelType));

    return filteredHotels;
  }

}
