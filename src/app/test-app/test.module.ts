import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar'


import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [TestComponent],
  exports: [TestComponent]
})
export class TestModule { }
