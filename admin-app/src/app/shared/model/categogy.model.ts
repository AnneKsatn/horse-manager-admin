export interface IStandingCategogy {
  id?: number;
  stableId?: number;
  price?: number;
  title?: string;
}

export class StandingCategogy implements IStandingCategogy {
  constructor(
    public id?: number,
    public stableId?: number,
    public price?: number,
    public title?: string
  ) { }
}
