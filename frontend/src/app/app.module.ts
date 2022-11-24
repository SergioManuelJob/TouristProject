import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
