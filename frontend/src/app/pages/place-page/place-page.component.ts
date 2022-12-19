import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { PlaceService } from 'src/app/services/place.service';
import { ReviewService } from 'src/app/services/review.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.scss']
})
export class PlacePageComponent {

  place: any;
  id: any;
  reviews: any[];
  review: FormGroup;
  reviewModel: Review;

  constructor(private placeService: PlaceService, private router: Router, private activatedRoute: ActivatedRoute, private reviewService: ReviewService, private storage: StorageService){
    this.reviews = []  
    this.reviewModel = {description: "", like: 0, app_user_id: 0, place_id: 0}
    this.review = new FormGroup({
      description: new FormControl('', Validators.required),
      liked: new FormControl(false),
    });
  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.placeService.getOnePlace(this.id).subscribe(data =>{  
      this.place = data; 
    });
    this.reviewService.getAllReviews().subscribe(data =>{
      this.reviews = data;
      this.checkReviews()
    })  
  }

   checkReviews(){
    for(let i = 0; i < this.reviews.length; i++){
      if(this.reviews[i].placeId.id != this.place.id){
        this.reviews.splice(i,1)
        i--
      }
    }
  }

  onSubmit(){
    this.reviewModel.description = this.review.value.description
    if(this.review.value.liked){
    this.reviewModel.like = 0
    }
    else{
      this.reviewModel.like = 1
    } 
    this.reviewModel.place_id = this.id
    this.reviewModel.app_user_id = this.storage.getUser().id
    this.reviewService.createReview(this.reviewModel) 
    alert("Comment wrote succesfully")
    window.location.reload()
  }

  

}
