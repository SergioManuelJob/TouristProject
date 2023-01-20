import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  endpoint: string = "http://" + window.location.hostname + ":8080/place"

  constructor(private http: HttpClient) { }

  getPlaceReport(idPlace: number){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(this.endpoint + "/exportInvoice", {responseType: 'blob', params: {idPlace: idPlace}})
  }
}
