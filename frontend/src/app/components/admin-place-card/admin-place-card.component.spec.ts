import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlaceCardComponent } from './admin-place-card.component';

describe('AdminPlaceCardComponent', () => {
  let component: AdminPlaceCardComponent;
  let fixture: ComponentFixture<AdminPlaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
