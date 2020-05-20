import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../../core/guard/auth.guard';
import { NgModule } from '@angular/core';
import { WeaponsListComponent } from './weapons-list/weapons-list.component';

const routes: Routes = [
  { path: '', component: WeaponsListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeaponsRoutingModule { }
