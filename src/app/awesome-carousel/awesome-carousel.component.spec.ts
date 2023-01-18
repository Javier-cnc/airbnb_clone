import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeCarouselComponent } from './awesome-carousel.component';

describe('AwesomeCarouselComponent', () => {
  let component: AwesomeCarouselComponent;
  let fixture: ComponentFixture<AwesomeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwesomeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
