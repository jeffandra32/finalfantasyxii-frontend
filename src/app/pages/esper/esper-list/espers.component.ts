import { Component, OnInit } from '@angular/core';

import { Esper } from './../../../core/enums/espers';
import { EsperDTO } from './../../../core/interfaces/esper.';
import { EsperService } from 'src/app/core/services/esper.service';

@Component({
  selector: 'app-espers',
  templateUrl: './espers.component.html',
  styleUrls: ['./espers.component.scss'],
})
export class EspersComponent implements OnInit {
  esperBeliasDetails: EsperDTO[] = [];
  esperMateusDetails: EsperDTO[] = [];
  esperAdrammelechDetails: EsperDTO[] = [];


  esperBeliasDesc: string;
  esperMateusDesc: string;
  esperAdrammelechDesc: string;

  constructor(private esperService: EsperService) {}

  ngOnInit() {
    this.getAllEspers();
  }

  /**
   * Retorna uma lista de Espers
   * @memberof EspersSwordComponent
   */
  getAllEspers(): void {
    const belias: EsperDTO[] = [];
    const mateus: EsperDTO[] = [];
    const adrammelech: EsperDTO[] = [];

    this.esperService.getAllEspers().subscribe(
      (espers: any) => {
        espers.map((res: EsperDTO) => {
          if (res.name === Esper.BELIAS) {
            belias.push(res);
          }

          if (res.name === Esper.MATEUS) {
            mateus.push(res);
          }

          if (res.name === Esper.ADRAMMELECH) {
            adrammelech.push(res);
          }
        });

        // Belias
        this.esperBeliasDetails = belias;
        this.esperBeliasDesc = belias[0].description;

        // Mateus
        this.esperMateusDetails = mateus;
        this.esperMateusDesc = mateus[0].description;

        // Adrammelech
        this.esperAdrammelechDetails = adrammelech;
        this.esperAdrammelechDesc = adrammelech[0].description;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
