import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private http: HttpClient) {}

  RATE_KEY = 'currencyRate';

  getRate() {
    const ILSrate = this.load(this.RATE_KEY);
    return ILSrate
      ? ILSrate
      : this.http
          .get<{ USD_ILS: any }>(
            'https://free.currconv.com/api/v7/convert?q=USD_ILS&compact=y&apiKey=ef6f143e45e8086e0792'
          )
          .pipe(map((res) => this.store(this.RATE_KEY, res.USD_ILS.val)))
          .toPromise();
  }

  store(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
    return JSON.parse(localStorage[key]);
  }

  load(key: string, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
  }
}
