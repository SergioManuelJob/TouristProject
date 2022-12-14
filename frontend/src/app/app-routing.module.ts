import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PlacePageComponent } from './pages/place-page/place-page.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { AuthGuard } from './Models/auth-guard';
import { AdminPlacesComponent } from './pages/admin-places/admin-places.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { CreatePlacePageComponent } from './pages/create-place-page/create-place-page.component';
import { UpdatePlacePageComponent } from './pages/update-place-page/update-place-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'adminPlaces', 
    component: AdminPlacesComponent, 
    canActivate: [AuthGuard],
      data: {
        role: 'ROLE_ADMIN'
      }
  }, 
  {
    path: 'adminUsers', 
    component: AdminUsersComponent, 
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'createPlace', 
    component: CreatePlacePageComponent, 
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'updatePlace/:id', 
    component: UpdatePlacePageComponent, 
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'place/:id',
    component: PlacePageComponent,
  },
  {
    path: 'logIn',
    component: LogInPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'help',
    component: HelpPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'information',
    component: InformationPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'configuration',
    component: ConfigurationPageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations:[],
  exports: [
    RouterModule
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
