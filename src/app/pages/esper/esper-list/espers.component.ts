import { Component, OnInit } from '@angular/core';

import { EsperDTO } from './../../../core/interfaces/esper.';
import { EsperService } from 'src/app/core/services/esper.service';

@Component({
  selector: 'app-espers',
  templateUrl: './espers.component.html',
  styleUrls: ['./espers.component.scss'],
})
export class EspersComponent implements OnInit {
  esperBeliasDetails: EsperDTO[] = [];

  constructor(private esperService: EsperService) {}

  ngOnInit() {
    this.getAllWeapons();
  }

  /**
   * Retorna uma lista de Weapons
   * @memberof WeaponsSwordComponent
   */
  getAllWeapons(): void {
    const belias: EsperDTO[] = [];
    this.esperService.getAllEspers().subscribe(
      (espers: any) => {
        espers.map((res: EsperDTO) => {
          if (res.name === 'Belias, the Gigas') {
            belias.push(res);
          }
        }),
          (this.esperBeliasDetails = belias);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
