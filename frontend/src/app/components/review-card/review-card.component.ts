import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {

  @Input()
  place: String;
  @Input()
  score: String;
  @Input()
  placeId: String;

  like: boolean;

  constructor(private router: Router){
    this.place =""
    this.score = ""
    this.placeId = ""
    this.like = false;
  }

  ngOnInit(){
    if(!(this.score == "true"))
      this.like = true;
  }

  go(){

    this.goToThisPlace(+this.placeId)
  }

  goToThisPlace(id: number) {
    this.router.navigateByUrl(`place/${id}`);
  }

}
