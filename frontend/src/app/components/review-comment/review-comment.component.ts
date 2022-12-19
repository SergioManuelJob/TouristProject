import { Component, Input } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.scss']
})
export class ReviewCommentComponent {

  @Input()
  name: String;
  @Input()
  content: String;
  @Input()
  score: String;
  @Input()
  id: String;

  dislike: boolean;

  constructor(private reviewService: ReviewService){
    this.name = ""
    this.content = ""
    this.score = ""
    this.id = ""
    this.dislike = false;
  }

  ngOnInit(){
    if(!(this.score == "true"))
      this.dislike = true;
  }

  delete(){
    this.reviewService.deleteReview(+this.id)
    window.location.reload()
  }

}
