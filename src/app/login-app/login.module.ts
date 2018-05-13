import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


import { LoginComponent } from './Components/login-component/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule
 
  ],
  providers: [],
  bootstrap: [LoginComponent],
  exports:[LoginComponent]

})
export class LoginModule { }
