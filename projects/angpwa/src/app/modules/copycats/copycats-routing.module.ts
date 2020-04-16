import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopycatsComponent } from './copycats.component';

const routes: Routes = [{ path: '', component: CopycatsComponent }, { path: 'powerhouse', loadChildren: () => import('./modules/powerhouse/powerhouse.module').then(m => m.PowerhouseModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopycatsRoutingModule { }
