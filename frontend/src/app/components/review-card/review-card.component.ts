import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {

  @Input()
  date: String;
  @Input()
  place: String;
  @Input()
  score: String;

  like: boolean;

  constructor(){
    this.date = ""
    this.place =""
    this.score = ""
    this.like = false;
  }

  ngOnInit(){
    if(!(this.score == "0"))
      this.like = true;
  }

}
