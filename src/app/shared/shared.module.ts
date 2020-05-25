import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdrammelechDetailsComponent } from './components/espers/adrammelech-details/adrammelech-details.component';
import { BeliasDetailsComponent } from './components/espers/belias/belias-details.component';
import { CommonModule } from '@angular/common';
import { GreatSwordsComponent } from './components/equipments/great-swords/great-swords.component';
import { ItemsDetailsComponent } from './components/items-loots/items-details/items-details.component';
import { LoadingComponent } from './loading/loading.component';
import { MateusDetailsComponent } from './components/espers/mateus/mateus-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchProcessPipe } from './pipes/filter-list-process';
import { WeaponsSwordComponent } from './components/equipments/weapons-sword/weapons-sword.component';

@NgModule({
  declarations: [
    LoadingComponent,
    WeaponsSwordComponent,
    SearchProcessPipe,
    GreatSwordsComponent,
    BeliasDetailsComponent,
    MateusDetailsComponent,
    AdrammelechDetailsComponent,
    ItemsDetailsComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoadingComponent,
    WeaponsSwordComponent,
    GreatSwordsComponent,
    BeliasDetailsComponent,
    MateusDetailsComponent,
    AdrammelechDetailsComponent,
    ItemsDetailsComponent
  ],
})
export class SharedModule {}
