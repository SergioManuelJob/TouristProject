import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent {

  @Input()
  title: String;
  @Input()
  url: String;
  @Input()
  location: String;

  constructor(){
    this.title = ""
    this.url = ""
    this.location = ""
  }

}
