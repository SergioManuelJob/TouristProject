import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { LogInUser } from 'src/app/Models/log-in-user';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent {
  user: FormGroup;
  private login: LogInUser;
  isLogin = false;
  roleAs: string = "";

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router, private auth: AuthService, private storage: StorageService, private permissionsService: NgxPermissionsService){
    this.login = { username: '', password: '' }
    this.user = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  get username() { return this.user.get('username'); }
  get password() { return this.user.get('password'); }

  ngOnInit(): void {
    if (this.storage.getToken()) {
      this.isLoggedIn = true;
    }
    console.log(this.storage.getToken())
  }

  onSubmit(): void {
    this.login = { username: btoa(this.username?.value), password: btoa(this.password?.value) }
    console.log(this.login.username + ' - ' + this.login.password)
    this.auth.login(this.login).subscribe(
      data => {
        this.storage.saveToken(data.accessToken);
        this.storage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storage.getUser().roles;
        console.log(this.roles)
        switch (this.roles.toString()) {
          case 'ROLE_ADMIN': {
            console.log('llegué como admin')
          break;
          }
          case 'ROLE_USER': {
            console.log('llegué como user')
          break;
          }
        }
        const perm: any[] = [this.roles];
          this.permissionsService.loadPermissions(perm);
          this.router.navigateByUrl("/profile");
          alert("Log In Done Succesfully!")
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          alert("Some error ocurred while logging in!")
        }
      );
  }


}
