import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: User = {id: 0, username: "", email: "", password: ""};
  
  constructor(private router: Router, private userService: UserService, private storage: StorageService){}

  ngOnInit(): void {
    this.userService.getOneUser(this.storage.getUser().id).subscribe(data =>{
      this.user = data;
    })
  }

  logout(){
    this.storage.signOut();
    window.location.href = "/home"
  }
}
