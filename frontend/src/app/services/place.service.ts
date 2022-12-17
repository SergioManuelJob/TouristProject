import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Place from '../Models/place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  endpoint: string = "http://" + window.location.hostname + ":8080/place"

  constructor(private httpClient: HttpClient) { }

  getAllPlaces(){
    return this.httpClient.get<Array<Place>>(this.endpoint);
  }

  getOnePlace(id: number){
    return this.httpClient.get<Place>(this.endpoint + "/" + id);  
  }

  deletePlace(id: number){
    return this.httpClient.delete<Place>(this.endpoint + "/" + id).subscribe(data => { });
  }

  updatePlace(id: number, place: Place, blob: any){
    let data = new FormData();
    data.append("title", place.title)
    data.append("description", place.description)
    data.append("direction",place.direction)
    data.append("file", blob)
    return this.httpClient.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  createPlace(place: Place, blob: any){
    let data = new FormData();
    data.append("title", place.title)
    data.append("description", place.description)
    data.append("direction",place.direction)
    data.append("file", blob)
    return this.httpClient.post(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }

}
