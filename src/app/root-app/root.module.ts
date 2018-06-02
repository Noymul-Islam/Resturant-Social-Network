import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './root.component';
import {LoginModule} from '../login-app/login.module';
import {AppRoutingModule} from './root-routing.module';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    LoginModule,
    AppRoutingModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
