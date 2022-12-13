import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() username: string;
  @Input() email: string;
  @Input() id: any;

  constructor(private userService: UserService){
    this.username = "";
    this.email = "";
    this.id = "1";
  }

  delete(){
    this.id = +this.id
    this.userService.deleteUser(this.id);
    window.location.reload()
  }

}
