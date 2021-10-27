import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { signup1Component } from './signup1/signup1.component';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';


@NgModule({
  declarations: [
    AppComponent,
    
    
    LoginComponent,
    signup1Component,
    PasswordValidatorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
