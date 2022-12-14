import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-admin-place-card',
  templateUrl: './admin-place-card.component.html',
  styleUrls: ['./admin-place-card.component.scss']
})
export class AdminPlaceCardComponent {

  @Input()
  title: string;
  
  @Input() 
  location: string;

  @Input() 
  image: SafeResourceUrl;

  @Input()
  typeImg: string;

  @Input()
  id: any;

  constructor(private placeService: PlaceService){
    this.title = "";
    this.location = "";
    this.image = "";
    this.typeImg = "";
    this.id = "";
  }

  delete(){
    this.id = +this.id
    this.placeService.deletePlace(this.id);
    window.location.reload()
  }

  update(){
    
  }

}
