
import { NgModule } from '@angular/core';
import {MatButton} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';
import { TestComponent } from './test.component';
import {TestRoutingModule} from './test-routing.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TestComponent
  }
];
@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    TestRoutingModule,
    CommonModule,
    RouterModule.forChild(routes)   
  ],
  providers: [],
  bootstrap: [TestComponent],
  exports: [TestComponent,RouterModule]
})
export class TestModule {
  constructor(){
    console.log("Hello");
  }

 }
