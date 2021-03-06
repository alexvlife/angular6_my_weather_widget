import { Weather } from "./weather";
import { Social } from "./social";

export class Hotel {
  constructor(
    public id: number,
    public types: HotelType[],
    public imageUrl: string,
    public address: string,
    public phone: string,
    public weatherInfo: Weather,
    public socialInfo: Social,
  ) {}
}

export enum HotelType {
  MOUNTAINS = 'MOUNTAINS',
  SEA = 'SEA',
  FISHING = 'FISHING',
  TOUR = 'TOUR',
}
