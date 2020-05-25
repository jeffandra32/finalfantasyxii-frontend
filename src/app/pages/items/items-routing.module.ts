import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../../core/guard/auth.guard';
import { ItemsListComponent } from './items-list/items-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ItemsListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
