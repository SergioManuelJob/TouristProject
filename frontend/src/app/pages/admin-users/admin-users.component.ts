import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService){
    this.users = [];
  }

  ngOnInit(){
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

}
