import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { HelpCardComponent } from './components/help-card/help-card.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PlacePageComponent } from './pages/place-page/place-page.component';
import { ReviewCommentComponent } from './components/review-comment/review-comment.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AdminPlacesComponent } from './pages/admin-places/admin-places.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component'
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlaceCardComponent,
    LogInPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    HelpPageComponent,
    HelpCardComponent,
    ProfilePageComponent,
    ReviewCardComponent,
    InformationPageComponent,
    ContactPageComponent,
    PlacePageComponent,
    ReviewCommentComponent,
    AdminPlacesComponent,
    AdminUsersComponent,
    ConfigurationPageComponent,
    DialogoConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
