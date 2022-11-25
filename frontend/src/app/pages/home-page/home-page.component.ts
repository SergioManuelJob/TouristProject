import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PlaceCardComponent } from 'src/app/components/place-card/place-card.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  router: Router;

  constructor(router: Router){
    this.router = router;
  }

  goToPlace(){
    this.router.navigateByUrl("/place")
  }

}
