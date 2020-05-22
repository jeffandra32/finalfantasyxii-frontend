import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weapons-sword',
  templateUrl: './weapons-sword.component.html',
  styleUrls: ['./weapons-sword.component.scss'],
})
export class WeaponsSwordComponent {
  @Input() swordList: any[] = [];

  constructor() {}
}
