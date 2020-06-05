
export interface IStableVetInfo {
  id?: number;
  stableID?: number;
  date?: Date;
  title?: string;
  price?: number;
}

export class StableVetInfo implements IStableVetInfo {
  constructor(public id?: number, public stableID?: number, public date?: Date, public title?: string, public price?: number) {}
}
