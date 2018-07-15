import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignUpComponent } from './Components/signup-component/signup.component';
import {AppRootRoutingModule} from '../RoutingConfiguration/routing-module';
import {CommonModule} from '@angular/common';
//import {OrdersModule} from '../orders/orders.module';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
    {
      path: '', component:  SignUpComponent }
    ];

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    //BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [SignUpComponent],
  exports:[SignUpComponent,RouterModule]

})
export class SignUpModule {

  constructor(){
    console.log("Login Module");
  }
 }
