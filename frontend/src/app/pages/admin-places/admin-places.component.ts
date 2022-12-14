import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Place from 'src/app/Models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-admin-places',
  templateUrl: './admin-places.component.html',
  styleUrls: ['./admin-places.component.scss']
})
export class AdminPlacesComponent {
  
  places: Place[];

  constructor(private placeService: PlaceService, private router: Router){
    this.places = []; 
    this.getAllPlaces();    
  }

  getAllPlaces(){
    this.placeService.getAllPlaces().subscribe(data => {
      this.places = data;
    }) 
  }

  goToCreatePlace(){
    this.router.navigateByUrl("createPlace")
  }

  goToUpdatePlace(id: number) {
    this.router.navigateByUrl(`updatePlace/${id}`);
  }


}
