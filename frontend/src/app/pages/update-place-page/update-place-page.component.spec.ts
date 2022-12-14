import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlacePageComponent } from './update-place-page.component';

describe('UpdatePlacePageComponent', () => {
  let component: UpdatePlacePageComponent;
  let fixture: ComponentFixture<UpdatePlacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlacePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
