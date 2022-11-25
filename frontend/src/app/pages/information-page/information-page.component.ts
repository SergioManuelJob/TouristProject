import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss']
})
export class InformationPageComponent {
  router: Router;
  constructor(router: Router){
    this.router = router;
  }

  goBack(){
    this.router.navigateByUrl("/help")  
  }
}
