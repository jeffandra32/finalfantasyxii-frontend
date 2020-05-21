export interface WeaponDTO {
  id: number;
  name: string;
  type: string;
  attack: number;
  evade: number;
  combo: number;
  effects?: string;
  license?: string;
  find?: string;
  treasure?: string;
  stolen?: string;
  drops?: string;
  purchased?: string;
}
