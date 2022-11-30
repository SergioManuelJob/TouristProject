import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.scss']
})
export class PlacePageComponent {

  place: any;
  id: any;
  activatedRoute: ActivatedRoute;

  constructor(private placeService: PlaceService, private router: Router, activatedRoute: ActivatedRoute){
    this.activatedRoute = activatedRoute;
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.fillPlace();
  }

  fillPlace(){
    return this.placeService.getOnePlace(this.id).subscribe(data =>{  
      this.place = data; 
    })
  }

}
