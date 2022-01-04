import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationPreviewComponent } from './destination-preview.component';

describe('DestinationPreviewComponent', () => {
  let component: DestinationPreviewComponent;
  let fixture: ComponentFixture<DestinationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
