import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';

import { LogInPageComponent } from './log-in-page.component';

describe('LogInPageComponent', () => {
  let component: LogInPageComponent;
  let fixture: ComponentFixture<LogInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        NgxPermissionsModule.forRoot(),
        HttpClientModule,
      ],
      declarations: [ LogInPageComponent, NavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should return a form as invalid", () => {
    fixture = TestBed.createComponent(LogInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.user;
    const username = component.user.controls['username']
    username.setValue('Pedro')
    expect(form.invalid).toBeTruthy();
    
  })

  it("Should return a form as valid", () => {
    fixture = TestBed.createComponent(LogInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.user;
    const username = component.user.controls['username']
    const password = component.user.controls['password']
    username.setValue('Pedro')
    password.setValue('123456')
    expect(form.valid).toBeTruthy();
    
  })
});
