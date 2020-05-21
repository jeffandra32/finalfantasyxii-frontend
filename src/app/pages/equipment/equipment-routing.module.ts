import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../../core/guard/auth.guard';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: EquipmentListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
