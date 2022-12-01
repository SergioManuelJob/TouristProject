import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent {

  @Input()
  title: string;

  @Input() 
  image: SafeResourceUrl;

  @Input()
  typeImg: string;

  @Input() 
  location: string;

  constructor(){
    this.title = "";
    this.image = "";
    this.location = "";
    this.typeImg = "";
  }

}
