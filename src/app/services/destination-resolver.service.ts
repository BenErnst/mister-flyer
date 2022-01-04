import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Destination } from '../models/destination.model';
import { DestinationService } from './destination.service';

@Injectable({
  providedIn: 'root',
})
export class DestinationResolverService
  implements Resolve<Promise<Destination>>
{
  constructor(private destinationService: DestinationService) {}

  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    const destination = await this.destinationService
      .getDestinationById(id)
      .toPromise();
    return destination;
  }
}
