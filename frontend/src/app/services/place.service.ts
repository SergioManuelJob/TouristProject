import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Place from '../Models/place';
// import { Place } from '../Models/place';

const httpOptiosUsingUrlEncoded = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  endpoint: string = "http://localhost:8080/place"

  constructor(private httpClient: HttpClient) { }

  getAllPlaces(){
    return this.httpClient.get<Array<Place>>(this.endpoint);
  }

  getOnePlace(id: number){
    return this.httpClient.get<Place>(this.endpoint + "/" + id);  
  }

  deletePlace(id: number){
    return this.httpClient.delete<Place>(this.endpoint + "/" + id);
  }

  updatePlace(id: number, place: Place){
    let data = new URLSearchParams();
    data.append("title", place.title)
    data.append("description", place.description)
    data.append("direction",place.direction)
    // data.append("image",place.image.toStri)
    return this.httpClient.put(this.endpoint + "/" + id, data, httpOptiosUsingUrlEncoded);
  }

  createPlace(place: Place){
    let data = new URLSearchParams();
    data.append("title", place.title)
    data.append("description", place.description)
    data.append("direction",place.direction)
    // data.append("image",place.image)
    return this.httpClient.post(this.endpoint, data, httpOptiosUsingUrlEncoded);
  }

}
