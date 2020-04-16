import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowerhouseComponent } from './powerhouse.component';

const routes: Routes = [{ path: '', component: PowerhouseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerhouseRoutingModule { }
