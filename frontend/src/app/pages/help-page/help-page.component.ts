import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent {


  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  router: Router;

  constructor(router: Router, private darkModeService: DarkModeService){
    this.router = router;
  }

  goToInfo(){
    this.router.navigateByUrl("/information")
  }

  goToContact(){
    this.router.navigateByUrl("/contact")
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

}
