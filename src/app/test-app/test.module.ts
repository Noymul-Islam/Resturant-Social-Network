
import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';
import { TestComponent } from './test.component';
import {TestRoutingModule} from './test-routing.module';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    TestRoutingModule,
    CommonModule   
  ],
  providers: [],
  bootstrap: [TestComponent],
  exports: [TestComponent]
})
export class TestModule {
  constructor(){
    console.log("Hello");
  }

 }
