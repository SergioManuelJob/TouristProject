import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tourist Places';
  roles: string[];

  constructor(private permissionsService: NgxPermissionsService, 
    private authService: AuthService,
    private storage: StorageService) {
      this.roles = this.storage.getUser().roles
    }

  ngOnInit(): void {
    if(this.storage.getToken()){
    const perm: any[] = [this.roles];
    this.permissionsService.loadPermissions(perm);
    }
  }
}
