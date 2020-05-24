import { Component, Input, OnInit } from '@angular/core';

import { EsperDTO } from './../../../../core/interfaces/esper.';

@Component({
  selector: 'app-adrammelech-details',
  templateUrl: './adrammelech-details.component.html',
  styleUrls: ['./adrammelech-details.component.scss']
})
export class AdrammelechDetailsComponent implements OnInit {
  @Input() esperAdrammelechDetails: EsperDTO[] = [];
  constructor() { }

  ngOnInit() {
  }

}
