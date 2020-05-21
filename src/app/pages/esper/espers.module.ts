import { CommonModule } from '@angular/common';
import { EspersComponent } from './esper-list/espers.component';
import { EspersRoutingModule } from './espers-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EspersComponent],
  imports: [
    CommonModule,
    EspersRoutingModule
  ]
})
export class EspersModule { }
