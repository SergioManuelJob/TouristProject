import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tourist Places';

  constructor(private permissionsService: NgxPermissionsService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    let perm = this.authService.getRole();

    this.permissionsService.loadPermissions([perm]);
  }
}
