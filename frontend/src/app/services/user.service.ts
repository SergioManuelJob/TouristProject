import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

const httpOptiosUsingUrlEncoded = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = "http://localhost:8080/user"

  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
    return this.httpClient.get<Array<User>>(this.endpoint);
  }

  getOneUser(id: number){
    return this.httpClient.get<User>(this.endpoint + "/" + id);  
  }

  deleteUser(id: number){
    return this.httpClient.delete<User>(this.endpoint + "/" + id);
  }

  updateUser(id: number, user: User){
    let data = new URLSearchParams();
    data.append("username", user.username)
    data.append("email", user.email)
    data.append("password",user.password)
    return this.httpClient.put(this.endpoint + "/" + id, data, httpOptiosUsingUrlEncoded);
  }

}
