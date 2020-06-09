export interface ICategoryService {
    id?: number;
    categoryId?: number;
    title?: string;
  }
  
  export class CategoryServiceModel  implements ICategoryService  {
    constructor(
      public id?: number,
      public categoryId?: number,
      public title?: string
    ) { }
  }
  