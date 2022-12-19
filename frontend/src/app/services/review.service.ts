import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  endpoint: string = "http://" + window.location.hostname + ":8080/review"

  constructor(private httpClient: HttpClient) { }

  getAllReviews(){
    return this.httpClient.get<Array<Review>>(this.endpoint);
  }

  getOneReview(id: number){
    return this.httpClient.get<Review>(this.endpoint + "/" + id);  
  }

  deleteReview(id: number){
    return this.httpClient.delete<Review>(this.endpoint + "/" + id).subscribe(data => { });
  }

  updateReview(id: number, review: Review){
    let data = new FormData();
    data.append("description", review.description)
    data.append("like", review.like.toString())
    data.append("userId",review.app_user_id.toString())
    data.append("placeId",review.place_id.toString())
    return this.httpClient.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  createReview(review: Review){
    let data = new FormData();
    data.append("description", review.description)
    data.append("like", review.like.toString())
    data.append("userId",review.app_user_id.toString())
    data.append("placeId",review.place_id.toString())
    return this.httpClient.post(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }
}
