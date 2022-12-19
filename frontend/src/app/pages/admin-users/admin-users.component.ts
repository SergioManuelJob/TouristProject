import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private storage: StorageService){
    this.users = [];
  }

  ngOnInit(){
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      for(let i = 0; i<this.users.length ; i++){
        if(this.users[i].email == this.storage.getUser().email){
          this.users.splice(i, 1)
        }
      }
    }) 
  }

}
