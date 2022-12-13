import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion/dialogo-confirmacion.component';
import { User } from 'src/app/Models/user';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent implements OnInit{

  user: FormGroup;
  username: string = "";
  email: string = "";
  userModel: User = {id: 0, username: "", email: "", password: ""};
  userChanged: User;
  isCreated: boolean = false;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public dialogo: MatDialog,private router: Router, private storage: StorageService, private userService: UserService) {
    this.userChanged = { username: "", email: "", password: ""}
    this.user = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    });
  }

  ngOnInit(): void {
    this.userService.getOneUser(this.storage.getUser().id).subscribe(data =>{
      this.userModel = data;
      this.username = this.userModel.username;
      this.email = this.userModel.email;
    })    
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
          this.userChanged.username = this.user.value.name
          this.userChanged.email = this.user.value.email
          this.userService.updateUserWithoutPassword(this.userModel.id!, this.userChanged)
          alert("Changes done succesfully");
          this.router.navigateByUrl("/profile")
        } else {
          this.isCreated = false;
        }
      });
    }
    else{}
  }

}