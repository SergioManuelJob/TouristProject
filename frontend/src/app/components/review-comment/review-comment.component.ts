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

  like: boolean;

  constructor(){
    this.name = ""
    this.content = ""
    this.score = ""
    this.like = false;
  }

  ngOnInit(){
    if(!(this.score == "0"))
      this.like = true;
  }

}
