import { Component, OnInit } from '@angular/core';

import { WeaponDTO } from './../../../core/interfaces/weapon';
import { WeaponService } from './../../../core/services/weapon.service';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss']
})
export class WeaponsListComponent implements OnInit {
  weaponsList: any[] = [];

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
    this.getAllWeapons();
  }

  getAllWeapons(): void {
    this.weaponService.getAllWeapons().subscribe((res: WeaponDTO) => {
     this.weaponsList.push(res);
     console.log(this.weaponsList, 'this.weaponsList');
     
    }, (err) => {
      console.error(err);
      alert('Deu ruim!')
    })
  }

}
