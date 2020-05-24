import { Component, Input, OnInit } from '@angular/core';

import { EsperDTO } from './../../../../core/interfaces/esper.';

@Component({
  selector: 'app-mateus-details',
  templateUrl: './mateus-details.component.html',
  styleUrls: ['./mateus-details.component.scss'],
})
export class MateusDetailsComponent implements OnInit {
  @Input() esperMateusDetails: EsperDTO[] = [];
  constructor() {}

  ngOnInit() {}
}
