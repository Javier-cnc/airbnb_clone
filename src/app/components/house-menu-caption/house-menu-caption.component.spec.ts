import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMenuCaptionComponent } from './house-menu-caption.component';

describe('HouseMenuCaptionComponent', () => {
  let component: HouseMenuCaptionComponent;
  let fixture: ComponentFixture<HouseMenuCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseMenuCaptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseMenuCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
