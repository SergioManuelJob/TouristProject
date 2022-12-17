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
    data.append("liked", review.liked.toString())
    data.append("time",review.time.toString())
    data.append("app_user_id_id",review.app_user_id.toString())
    data.append("place_id_id",review.place_id.toString())
    return this.httpClient.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  createReview(review: Review){
    let data = new FormData();
    data.append("description", review.description)
    data.append("liked", review.liked.toString())
    data.append("time",review.time.toString())
    data.append("app_user_id_id",review.app_user_id.toString())
    data.append("place_id_id",review.place_id.toString())
    return this.httpClient.post(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }
}
