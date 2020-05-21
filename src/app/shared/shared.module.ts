import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { GreatSwordsComponent } from './components/great-swords/great-swords.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchProcessPipe } from './pipes/filter-list-process';
import { WeaponsSwordComponent } from './components/weapons-sword/weapons-sword.component';

@NgModule({
  declarations: [LoadingComponent, WeaponsSwordComponent, SearchProcessPipe, GreatSwordsComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoadingComponent, WeaponsSwordComponent, GreatSwordsComponent],
})
export class SharedModule {}
