import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerhouseRoutingModule } from './powerhouse-routing.module';
import { PowerhouseComponent } from './powerhouse.component';


@NgModule({
  declarations: [PowerhouseComponent],
  imports: [
    CommonModule,
    PowerhouseRoutingModule
  ]
})
export class PowerhouseModule { }
