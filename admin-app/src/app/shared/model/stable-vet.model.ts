
export interface IStableVet {
    id?: number;
    stableVetInfoId?: number;
    horseId?: number;
    horseName?: string;
    status?: string;
    checked?: boolean;
  }
  
  export class StableVet implements IStableVet {
    constructor(
      public id?: number, 
      public stableVetInfoId?: number,
      public horseId?: number,
      public horseName?: string,
      public status?: string,
      ) {}
  }
  
  
  