import { Routes } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./../../pages/home/home.module').then((h) => h.HomeModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('../../pages/characters/characters.module').then(
        (p) => p.CharactersModule
      ),
  },
  {
    path: 'equipment',
    loadChildren: () =>
      import('../../pages/equipment/equipment.module').then(
        (w) => w.EquipmentModule
      ),
  },
  {
    path: 'espers',
    loadChildren: () =>
      import('../../pages/esper/espers.module').then((e) => e.EspersModule),
  },
  {
    path: 'items-loots',
    loadChildren: () =>
      import('../../pages/items/items.module').then((i) => i.ItemsModule),
  },
];
