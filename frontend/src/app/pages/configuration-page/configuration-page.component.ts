import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit {

  user: FormGroup;
  router: Router;
  isCreated: boolean = false;

  constructor(public dialogo: MatDialog, router: Router) {
    this.router = router
    this.user = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  onSubmit(): void {
    if(this.isCreated == false){
      this.isCreated = true;
      this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `Confirm changes?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("Changes done succesfully");
          this.router.navigateByUrl("/profile")
        } else {
          this.isCreated = false;
        }
      });
    }
    else{}
  }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

}