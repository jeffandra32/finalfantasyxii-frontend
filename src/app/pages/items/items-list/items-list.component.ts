import { Component, OnInit } from '@angular/core';

import { ItemDTO } from './../../../core/interfaces/item';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  itemsList: ItemDTO;

  constructor(private itemService: ItemsService) {}

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(): void {
    this.itemService.getAllItems().subscribe(
      (items: ItemDTO) => {
        this.itemsList = items;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
