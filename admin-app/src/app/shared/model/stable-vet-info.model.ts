
export interface IStableVetInfo {
  id?: number;
  stableId?: number;
  date?: Date;
  title?: string;
  price?: number;
}

export class StableVetInfo implements IStableVetInfo {
  constructor(
    public id?: number, 
    public stableId?: number,
    public date?: Date, 
    public title?: string, 
    public price?: number
    ) {}
}


