import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootPrintBarComponent } from './foot-print-bar.component';

describe('FootPrintBarComponent', () => {
  let component: FootPrintBarComponent;
  let fixture: ComponentFixture<FootPrintBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootPrintBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootPrintBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
