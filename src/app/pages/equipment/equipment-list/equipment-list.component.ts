import { Component, OnInit } from '@angular/core';

import { EquipmentService } from './../../../core/services/equipment.service';
import { WeaponDTO } from './../../../core/interfaces/weapon';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss'],
})
export class EquipmentListComponent implements OnInit {
  swordList: WeaponDTO[] = [];
  greatSwordList: WeaponDTO[] = [];

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
    const greatSwordList: WeaponDTO[] = [];
    this.equipmentService.getAllWeapons().subscribe(
      (weapons: any) => {
        weapons.map((res: WeaponDTO) => {
          if (res.type === 'sword') {
            swordList.push(res);
          }

          if (res.type === 'greatswords') {
            greatSwordList.push(res);
          }
        }),
          (this.swordList = swordList);
        this.greatSwordList = greatSwordList;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
