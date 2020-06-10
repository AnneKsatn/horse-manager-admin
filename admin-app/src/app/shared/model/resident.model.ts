import { Moment } from 'moment';

export interface IResident {
    id?: number;
    stableId?: number;
    date?: Moment;
    horseId?: number;
    categoryId?: number;
    stall?: number
  }
  
  export class Resident implements IResident {
    constructor(
        public id?: number, 
        public stableId?: number, 
        public date?: Moment, 
        public horseId?: number,
        public categoryId?: number,
        public stall?: number
        ) {}
  }
  


export interface IResidentInfo {
    id?: number;
    stableId?: number;
    date?: Moment;
    horseId?: number;
    categoryId?: number;
    stall?: number;
    name?: string;
    categoryTitle?: string;
  }