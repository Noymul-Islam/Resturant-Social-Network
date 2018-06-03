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
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '', component:  LoginComponent }
    ];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    //BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule
 
  ],
  providers: [],
  bootstrap: [LoginComponent],
  exports:[LoginComponent,RouterModule]

})
export class LoginModule {

  constructor(){
    console.log("Login Module");
  }
 }
