import { Component, Input, OnInit } from '@angular/core';

import { ItemDTO } from './../../../../core/interfaces/item';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss'],
})
export class ItemsDetailsComponent implements OnInit {
  @Input() itemsList: ItemDTO;

  constructor() {}

  ngOnInit(): void {}
}
