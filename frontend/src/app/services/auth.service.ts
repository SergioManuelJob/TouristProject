import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { of } from 'rxjs';
import { User } from '../Models/user';

const httpOptiosUsingUrlEncoded = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private permissionsService: NgxPermissionsService) { }

  login(value: string) {
    const perm: any[] = [value];
    this.permissionsService.loadPermissions(perm);

    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', value);
    return of({ success: true, role: value });
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
