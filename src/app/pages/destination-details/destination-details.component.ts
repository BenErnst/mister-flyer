import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UnsplashService } from 'src/app/services/unsplash.service';
import { WeatherService } from 'src/app/services/weather.service';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss'],
})
export class DestinationDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  destination: Destination;
  temperature = null;
  imgUrl = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService,
    private unsplashService: UnsplashService
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe((data) => {
      const { destination } = data;
      this.destination = destination;
    });
    this.setTemp();
    this.setImgUrl();
  }

  setTemp() {
    this.temperature = this.weatherService.getWeather(
      this.destination.coords.lat,
      this.destination.coords.lng
    );
  }

  setImgUrl() {
    this.imgUrl = this.unsplashService.getImg(this.destination.city);
  }

  onBack() {
    this.router.navigateByUrl('destination');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
