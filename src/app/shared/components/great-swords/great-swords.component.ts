import { Component, OnInit } from '@angular/core';

import { EquipmentService } from './../../../core/services/equipment.service';
import { WeaponDTO } from './../../../core/interfaces/weapon';

@Component({
  selector: 'app-great-swords',
  templateUrl: './great-swords.component.html',
  styleUrls: ['./great-swords.component.scss']
})
export class GreatSwordsComponent implements OnInit {

  weaponsList: WeaponDTO[] = [];

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit() {
    this.getAllWeapons();
  }

  /**
   * Retorna uma lista de Weapons
   * @memberof WeaponsSwordComponent
   */
  getAllWeapons(): void {
    const swordList: WeaponDTO[] = [];
    this.equipmentService.getAllWeapons().subscribe(
      (weapons: any) => {
        weapons.map((res: WeaponDTO) => {
          if (res.type === 'greatswords') {
            swordList.push(res);
          }
        }),
          (this.weaponsList = swordList);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
