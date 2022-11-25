import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent {

  router: Router;

  constructor(router: Router){
    this.router = router;
  }

  goToInfo(){
    this.router.navigateByUrl("/information")
  }

  goToContact(){
    this.router.navigateByUrl("/contact")
  }

}
