import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from 'src/app/models/destination.model';
import { DestinationService } from 'src/app/services/destination.service';
import { GeoCodingService } from 'src/app/services/geo-coding.service';
// import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'destination-edit',
  templateUrl: './destination-edit.component.html',
  styleUrls: ['./destination-edit.component.scss'],
})
export class DestinationEditComponent implements OnInit {
  destination: Destination;
  departAt = null;

  constructor(
    private destinationService: DestinationService,
    private geoCodingService: GeoCodingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ destination }) => {
      // this.destination = destination._id
      this.destination = destination
        ? destination
        : (this.destinationService.getEmptyDestination() as Destination);
    });
  }

  async onSaveDestination() {
    const departTimeStamp = new Date(this.departAt).getTime();
    this.destination.departAt = departTimeStamp;
    this.destination.coords = await this.geoCodingService.getCoords(
      this.destination.city
    );
    await this.destinationService.saveDestination(this.destination);
    this.router.navigateByUrl('destination');
  }
}
// .toPromise();
