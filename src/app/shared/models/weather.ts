export class Weather {
  constructor(
    public type: WeatherType,
    public airTemperature: number,
    public waterTemperature: number,
    public icon: string,
  ) {}
}

export enum WeatherType {
  SUNNY = 'SUNNY',
  CLOUDY = 'CLOUDY',
  RAINY = 'RAINY',
}
