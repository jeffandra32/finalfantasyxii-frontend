import { Component, OnInit } from '@angular/core';

import { EquipmentService } from './../../../core/services/equipment.service';
import { WeaponDTO } from './../../../core/interfaces/weapon';

@Component({
  selector: 'app-weapons-sword',
  templateUrl: './weapons-sword.component.html',
  styleUrls: ['./weapons-sword.component.scss'],
})
export class WeaponsSwordComponent implements OnInit {
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
          if (res.type === 'sword') {
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
