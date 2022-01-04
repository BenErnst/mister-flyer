import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeoCodingService {
  API_KEY = 'AIzaSyAwGiZvHMgXknOgVGzfiqUHedPY-M9aRpM';

  async getCoords(city) {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${this.API_KEY}`
    );
    const { data } = res;
    return data.results[0].geometry.location;
  }
}
