import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PlaceCardComponent } from 'src/app/components/place-card/place-card.component';
import Place from 'src/app/Models/place';
import { PlaceService } from 'src/app/services/place.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  places: Place[];
  router: Router;

  constructor(private placeService: PlaceService, router: Router){
    this.places = [];
    this.router = router;
    this.getAllPlaces();
    
  }

  goToPlace(){
    this.router.navigateByUrl("/place")
  }

  goToThisPlace(id: number){
    this.router.navigateByUrl(`place/${id}`);
  }

  getAllPlaces(){
    this.placeService.getAllPlaces().subscribe(data => {
      this.places = data;
  
      console.log(this.places)
    }) 

  }

}
