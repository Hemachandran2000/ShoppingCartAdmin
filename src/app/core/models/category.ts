export class baseCls{ }

export class Category extends baseCls {
    CategoryId: string;
    CategoryName: string;
    CategoryDesc: string;
}

export class SubCategory extends baseCls {
    CategoryId: string;    
    SubCategoryId: string;
    SubCategoryName: string;    
    SubCategoryDesc: string;
}