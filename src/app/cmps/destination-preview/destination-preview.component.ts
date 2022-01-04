import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Destination } from '../../models/destination.model';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'destination-preview',
  templateUrl: './destination-preview.component.html',
  styleUrls: ['./destination-preview.component.scss'],
})
export class DestinationPreviewComponent implements OnInit {
  @Input() destination: Destination;
  // @Output() onRemove = new EventEmitter<string>()
  imgUrl = null;
  constructor(private unsplashService: UnsplashService) {}

  ngOnInit(): void {
    this.setImgUrl();
  }

  setImgUrl() {
    this.imgUrl = this.unsplashService.getImg(this.destination.city);
  }
}
