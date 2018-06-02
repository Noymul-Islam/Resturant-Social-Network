import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  exports: [BrowserAnimationsModule]
})

export class OrdersModule { }
