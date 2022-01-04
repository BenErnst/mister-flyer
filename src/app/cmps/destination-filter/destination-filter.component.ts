// import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DestinationFilter } from '../../models/destination-filter.model';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'destination-filter',
  templateUrl: './destination-filter.component.html',
  styleUrls: ['./destination-filter.component.scss'],
})
export class DestinationFilterComponent implements OnInit {
  filterBy: DestinationFilter;
  subscription: Subscription;
  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.subscription = this.destinationService.filterBy$.subscribe(
      (filterBy) => {
        this.filterBy = filterBy;
      }
    );
  }

  onSetFilter() {
    this.debounce(
      this.destinationService.setFilter({ ...this.filterBy }),
      1000
    );
    // this.destinationService.setFilter({ ...this.filterBy });
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}
