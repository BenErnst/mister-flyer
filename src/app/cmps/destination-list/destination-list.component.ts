import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.scss'],
})
export class DestinationListComponent implements OnInit {
  @Input() destinations: Destination[];
  // @Output() onRemove = new EventEmitter<string>()
  constructor() {}

  ngOnInit(): void {}
}
