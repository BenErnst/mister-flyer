import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
// import { of } from 'rxjs/observable/of';
import { Destination } from '../models/destination.model';
import { HttpClient } from '@angular/common/http';
import { DestinationFilter } from '../models/destination-filter.model';

const DESTINATIONS = [
  {
    _id: '4b32ca',
    city: 'New York',
    flightDurationTo: '12',
    coords: { lat: 40.73061, lng: -73.935242 },
    departAt: null,
  },
  {
    _id: 'a99fde',
    city: 'London',
    flightDurationTo: '5',
    coords: { lat: 51.509865, lng: -0.118092 },
    departAt: null,
  },
  {
    _id: '83d319',
    city: 'Tokyo',
    flightDurationTo: '18',
    coords: { lat: 35.652832, lng: 139.839478 },
    departAt: null,
  },
  {
    _id: 'b47b4d',
    city: 'Buenos Aires',
    flightDurationTo: '18',
    coords: { lat: -34.603722, lng: -58.381592 },
    departAt: null,
  },
  {
    _id: 'e4699d',
    city: 'Sydney',
    flightDurationTo: '20',
    coords: { lat: -33.870453, lng: 151.208755 },
    departAt: null,
  },
  {
    _id: 'a9220a',
    city: 'Moscow',
    flightDurationTo: '3.5',
    coords: { lat: 55.751244, lng: 37.618423 },
    departAt: null,
  },
  {
    _id: 'f990db',
    city: 'Cape Town',
    flightDurationTo: '9',
    coords: { lat: -33.918861, lng: 18.4233 },
    departAt: null,
  },
  {
    _id: '0ffbdf',
    city: 'Mexico City',
    flightDurationTo: '13',
    coords: { lat: 19.432608, lng: -99.133209 },
    departAt: null,
  },
  {
    _id: 'aec652',
    city: 'Bankok',
    flightDurationTo: '11',
    coords: { lat: 13.736717, lng: 100.523186 },
    departAt: null,
  },
  {
    _id: 'c3d411',
    city: 'New Delhi',
    flightDurationTo: '8',
    coords: { lat: 28.6448, lng: 77.216721 },
    departAt: null,
  },
  {
    _id: '78b15f',
    city: 'Rome',
    flightDurationTo: '4',
    coords: { lat: 41.902782, lng: 12.496366 },
    departAt: null,
  },
  {
    _id: 'b13a8a',
    city: 'Los Angeles',
    flightDurationTo: '16',
    coords: { lat: 34.052235, lng: -118.243683 },
    departAt: null,
  },
  {
    _id: 'ebe9d1',
    city: 'Lima',
    flightDurationTo: '12',
    coords: { lat: -12.046374, lng: -77.042793 },
    departAt: null,
  },
  {
    _id: '45b82b',
    city: 'Addis Ababa',
    flightDurationTo: '4',
    coords: { lat: 9.036, lng: 38.7523 },
    departAt: null,
  },
  {
    _id: '95v27t',
    city: 'Stockholm',
    flightDurationTo: '5',
    coords: { lat: 59.334591, lng: 18.06324 },
    departAt: null,
  },
];

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor() {}

  //mock the server
  private _destinationsDb: Destination[] = DESTINATIONS;

  private _destinations$ = new BehaviorSubject<Destination[]>([]);
  public destinations$ = this._destinations$.asObservable();

  private _filterBy$ = new BehaviorSubject<DestinationFilter>({ term: '' });
  public filterBy$ = this._filterBy$.asObservable();

  public loadDestinations(): void {
    const filterBy = this._filterBy$.getValue();
    let destinations = this._destinationsDb;
    if (filterBy && filterBy.term) {
      destinations = this._filter(destinations, filterBy.term);
    }
    this._destinations$.next(this._sort(destinations));
  }

  public setFilter(filterBy) {
    this._filterBy$.next(filterBy);
    this.loadDestinations();
  }

  public getDestinationById(id: string): Observable<Destination> {
    //mock the server work
    const destination = this._destinationsDb.find(
      (destination) => destination._id === id
    );
    return destination
      ? of(destination)
      : Observable.call(`Destination id ${id} not found!`);
  }

  public deleteDestination(id: string) {
    //mock the server work
    this._destinationsDb = this._destinationsDb.filter(
      (destination) => destination._id !== id
    );
    // change the observable data in the service - let all the subscribers know
    this._destinations$.next(this._destinationsDb);
  }

  public saveDestination(destination: Destination) {
    // console.log(destination);

    return destination._id
      ? this._updateDestination(destination)
      : this._addDestination(destination);
  }

  private _updateDestination(destination: Destination) {
    //mock the server work
    this._destinationsDb = this._destinationsDb.map((d) =>
      destination._id === d._id ? destination : d
    );
    // change the observable data in the service - let all the subscribers know
    this._destinations$.next(this._sort(this._destinationsDb));
  }

  private _addDestination(destination: Destination) {
    //mock the server work
    const newDestination = new Destination(
      destination._id,
      destination.city,
      destination.flightDurationTo,
      destination.coords,
      destination.departAt
    );
    newDestination.setId();
    console.log(newDestination);

    this._destinationsDb.push(newDestination);
    this._destinations$.next(this._sort(this._destinationsDb));
  }

  public getEmptyDestination() {
    return {
      city: '',
      flightDurationTo: '',
      coords: null,
      departAt: null,
    };
  }

  private _sort(destinations: Destination[]): Destination[] {
    return destinations.sort((a, b) => {
      if (a.city.toLocaleLowerCase() < b.city.toLocaleLowerCase()) {
        return 1;
      }
      if (a.city.toLocaleLowerCase() > b.city.toLocaleLowerCase()) {
        return -1;
      }
      return 0;
    });
  }

  private _filter(destinations, term) {
    term = term.toLocaleLowerCase();
    return destinations.filter((destination) => {
      return (
        destination.city.toLocaleLowerCase().includes(term) ||
        destination.flightDurationTo.toLocaleLowerCase().includes(term)
      );
    });
  }
}
