import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { WeaponsListComponent } from './weapons-list/weapons-list.component';
import { WeaponsRoutingModule } from './weapons-routing.module';

@NgModule({
  declarations: [WeaponsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    WeaponsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeaponsModule { }
