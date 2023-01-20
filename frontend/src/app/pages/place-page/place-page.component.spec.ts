import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

import { PlacePageComponent } from './place-page.component';

describe('PlacePageComponent', () => {
  let component: PlacePageComponent;
  let fixture: ComponentFixture<PlacePageComponent>;
  let reviewService: ReviewService;
  let reactiveFormsModule: ReactiveFormsModule;
  let HttpClientTestingModule: HttpClient

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ PlacePageComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ReviewService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the `place` and `reviews` properties', () => {
    expect(component.place).toBeDefined();
    expect(component.reviews).toBeDefined();
  });

  it('should call the `createReview` method of the `reviewService` when the form is submitted', () => {
    component.review.setValue({ description: 'Test review', liked: true });
    component.onSubmit();
    expect(reviewService.createReview).toHaveBeenCalled();
  });
});
