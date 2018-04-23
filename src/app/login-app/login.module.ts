import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar'


import { LoginComponent } from './Components/login-component/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule
 
  ],
  providers: [],
  bootstrap: [LoginComponent],
  exports:[LoginComponent]

})
export class LoginModule { }
