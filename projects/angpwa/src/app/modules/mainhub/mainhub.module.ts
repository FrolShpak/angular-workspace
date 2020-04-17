import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainhubRoutingModule } from './mainhub-routing.module';
import { MainhubComponent } from './mainhub.component';


@NgModule({
  declarations: [MainhubComponent],
  imports: [
    CommonModule,
    MainhubRoutingModule
  ]
})
export class MainhubModule { }
