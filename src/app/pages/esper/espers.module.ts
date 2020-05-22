import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EspersComponent } from './esper-list/espers.component';
import { EspersRoutingModule } from './espers-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [EspersComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    EspersRoutingModule,
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EspersModule { }
