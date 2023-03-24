export type weather_details = {
  name: string;
  country: string;
  time: Date;
  temperature: number;
  weather_main: string;
  weather_desc: string;
  weather_icon: string;
  high: number;
  low: number;
  humidity: number;
  pressure: number;
  visibility: number;
  wind: number;
  wind_dir: number;
  sunrise: Date;
  sunset: Date;
};