import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopycatsRoutingModule } from './copycats-routing.module';
import { CopycatsComponent } from './copycats.component';


@NgModule({
  declarations: [CopycatsComponent],
  imports: [
    CommonModule,
    CopycatsRoutingModule
  ]
})
export class CopycatsModule { }
