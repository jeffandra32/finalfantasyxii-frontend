import { Component, Input, OnInit } from '@angular/core';

import { EsperDTO } from './../../../../core/interfaces/esper.';

@Component({
  selector: 'app-belias-details',
  templateUrl: './belias-details.component.html',
  styleUrls: ['./belias-details.component.scss'],
})
export class BeliasDetailsComponent {
  @Input() esperBeliasDetails: EsperDTO[] = [];

  constructor() {}
}
