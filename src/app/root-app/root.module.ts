import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './root.component';
import {AppRoutingModule} from './root-routing.module';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRootRoutingModule} from '../RoutingConfiguration/routing-module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    AppRoutingModule,
    CommonModule,
    AppRootRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
