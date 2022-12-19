import { Component, Input } from '@angular/core';

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

  dislike: boolean;

  constructor(){
    this.name = ""
    this.content = ""
    this.score = ""
    this.dislike = false;
  }

  ngOnInit(){
    if(!(this.score == "true"))
      this.dislike = true;
  }

}
