import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'home',
    title: 'Equipamentos',
    icon: '../../../../assets/img/icons/weapons.png',
    class: '',
  },
  // {
  //   path: 'objectives-register',
  //   title: 'Cadastro de Objetivos',
  //   icon: 'ni-settings-gear-65 text-blue',
  //   class: '',
  // },
  // {
  //   path: 'objectives',
  //   title: 'Lista de Objetivos',
  //   icon: 'ni-bullet-list-67 text-yellow',
  //   class: '',
  // },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  user: string;
  avatar: string;
  avatarUrl: string

  /**
   * Creates an instance of SidebarComponent.
   * @param {Router} router
   * @memberof SidebarComponent
   */
  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(() => {
      this.isCollapsed = true;
    });
    this.getUser();
  }

  private getUser() {
    const userInfor = JSON.parse(localStorage.getItem('currentUser'));
    this.avatar = userInfor.avatar;
    this.avatarUrl = userInfor.avatar_url;
    this.user = `${userInfor.firstName} ${userInfor.lastName}`;
  }
}
