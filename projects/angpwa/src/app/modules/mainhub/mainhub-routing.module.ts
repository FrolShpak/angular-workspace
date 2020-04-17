import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhubComponent } from './mainhub.component';

const routes: Routes = [{ path: '', component: MainhubComponent, children:[
  
] }, { path: 'copycats', loadChildren: () => import('../copycats/copycats.module').then(m => m.CopycatsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainhubRoutingModule { }
