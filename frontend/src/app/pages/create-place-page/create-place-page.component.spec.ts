import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlacePageComponent } from './create-place-page.component';

describe('CreatePlacePageComponent', () => {
  let component: CreatePlacePageComponent;
  let fixture: ComponentFixture<CreatePlacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlacePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
