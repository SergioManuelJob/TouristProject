import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable, of } from 'rxjs';
import { LogInUser } from '../Models/log-in-user';
import { User } from '../Models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = "http://" + window.location.hostname + ":8080/api/auth/"
  
  constructor(private permissionsService: NgxPermissionsService, private http: HttpClient) { }


  login(userData: LogInUser): Observable<any> {
    return this.http.post<LogInUser>(this.endpoint + 'signin', userData, httpOptions);
  }

  register(user: User){
    this.http.post<User>(this.endpoint + 'signup', user, httpOptions).subscribe();
  }

  logout() {
    const perm: any[] = [];
    this.permissionsService.loadPermissions(perm);

    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: false, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    return loggedIn == 'true' ? true : false;
  }

  getRole() {
    const role = localStorage.getItem('ROLE') || "";
    return role;
  }
}
