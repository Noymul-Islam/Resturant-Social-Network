import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar'


import { AppComponent } from './root.component';
import {TestModule} from '../test-app/test.module'
import {LoginModule} from '../login-app/login.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    TestModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
