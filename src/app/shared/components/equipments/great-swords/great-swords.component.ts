import { Component, Input } from '@angular/core';

import { WeaponDTO } from '../../../../core/interfaces/weapon';

@Component({
  selector: 'app-great-swords',
  templateUrl: './great-swords.component.html',
  styleUrls: ['./great-swords.component.scss']
})
export class GreatSwordsComponent {

  @Input() greateSwordList: WeaponDTO[] = [];

  constructor() {}
}
