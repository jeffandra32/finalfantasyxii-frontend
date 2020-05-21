import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../core/guard/auth.guard';
import { EspersComponent } from './esper-list/espers.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: EspersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspersRoutingModule { }
