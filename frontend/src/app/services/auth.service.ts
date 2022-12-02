import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

const httpOptiosUsingUrlEncoded = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = "http://localhost:8080/api/auth"

  constructor(private httpClient: HttpClient) { }

  signUpUser(user: User, blob: any){
    let data = new URLSearchParams();
    data.append("username", user.username)
    data.append("email", user.email)
    data.append("password",user.password)
    return this.httpClient.post(this.endpoint + "/signup", data, httpOptiosUsingUrlEncoded);
  }

  signInUser(user: User, blob: any){
    let data = new URLSearchParams();
    data.append("username", user.username)
    data.append("password",user.password)
    return this.httpClient.post(this.endpoint + "/signin", data, httpOptiosUsingUrlEncoded);
  }
}
