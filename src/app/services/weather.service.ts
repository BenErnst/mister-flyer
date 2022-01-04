import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  API_KEY = '72908e7efae4259c4b9a199e031fda2f';

  async getWeather(lat, lng) {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${this.API_KEY}`
    );
    const { data } = res;
    return data.main.temp;
  }
}
