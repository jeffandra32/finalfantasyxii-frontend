import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../core/guard/auth.guard';
import { CharactersComponent } from './characters.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CharactersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
