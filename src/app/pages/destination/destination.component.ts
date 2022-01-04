import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Destination } from 'src/app/models/destination.model';
import { DestinationService } from 'src/app/services/destination.service';

@Component({
  selector: 'destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  destinations: Destination[];
  destinations$: Observable<Destination[]>;
  subscription: Subscription;
  mapCenter = { lat: 31.788394, lng: 35.212357 };
  isGridView = true;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.loadDestinations();
    this.destinations$ = this.destinationService.destinations$;
  }

  changeView() {
    this.isGridView = !this.isGridView;
  }

  // onRemovePet(petId:string) {
  //   this.petService.remove(petId)
  // }
}
