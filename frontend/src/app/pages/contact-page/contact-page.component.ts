import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contact: FormGroup;

  constructor(private router: Router){
    this.contact = new FormGroup({
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.router.navigateByUrl("/help")
  }

}
