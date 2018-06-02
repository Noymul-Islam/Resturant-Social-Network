import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './root.component';

const routes: Routes = [
    {
      path: '',
      component: AppComponent    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule{

}