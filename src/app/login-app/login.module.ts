import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login-component/login.component';
import {AppRootRoutingModule} from '../RoutingConfiguration/routing-module';
import {CommonModule} from '@angular/common';
//import {OrdersModule} from '../orders/orders.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
  //s  BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    AppRootRoutingModule
 
  ],
  providers: [],
  bootstrap: [LoginComponent],
  exports:[LoginComponent]

})
export class LoginModule { }
