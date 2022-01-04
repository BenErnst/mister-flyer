import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  CLIENT_ID = 'fYAaMTGXp-djz1PPLLj0f4NQ7PKMhEYzHbTP28niDcs';

  async getImg(city) {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?page=1&per_page=13&query=${city}&client_id=${this.CLIENT_ID}`
    );
    const { data } = res;
    return data.results[0].urls.regular;
  }
}
