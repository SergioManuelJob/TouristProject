import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { ReviewService } from 'src/app/services/review.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: User = {id: 0, username: "", email: "", password: ""};
  reviews: any[];
  
  constructor(private router: Router, private userService: UserService, private storage: StorageService, private reviewService: ReviewService){
    this.reviews = []
  }

  ngOnInit(): void {
    this.userService.getOneUser(this.storage.getUser().id).subscribe(data =>{
      this.user = data;
    })
    this.reviewService.getAllReviews().subscribe(data =>{
      this.reviews = data;
      this.checkReviews()
    })   
  }

  checkReviews(){
    for(let i = 0; i < this.reviews.length; i++){
      if(this.reviews[i].userId.id != this.storage.getUser().id){
        this.reviews.splice(i,1)
        i--
      }
    }
  }

  logout(){
    this.storage.signOut();
    window.location.href = "/home"
  }
}
