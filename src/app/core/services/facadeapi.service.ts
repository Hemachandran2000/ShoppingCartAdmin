import { Injectable, Injector } from '@angular/core';
import { CategoryService, SubcategoryService } from '../services/index';

@Injectable()
export class FacadeService {

    private _categoryService: CategoryService;
    public get categoryService(): CategoryService {
        if (!this._categoryService) {
            this._categoryService = this.injector.get(CategoryService);
        }
        return this._categoryService;
    }

    constructor(private injector: Injector) { }
}
