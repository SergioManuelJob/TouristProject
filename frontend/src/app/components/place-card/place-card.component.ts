import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent {

  @Input()
  title: string;

  @Input() 
  url: string;

  @Input() 
  location: string;

  constructor(){
    this.title = "";
    this.url = "";
    this.location = "";
  }

}
