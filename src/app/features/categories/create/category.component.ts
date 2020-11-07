import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';

import { Category, SubCategory } from '../../../core/models/category';
import { SubcategoryService } from '../../../core/services/subcategory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryForm: FormGroup;
  subCategoryForm: FormGroup;
  isCate_submit: boolean = false;
  isCate_sub_submit: boolean = false;

  category: Category;
  subcategory: SubCategory;

  categoryList$: Observable<Category[]>;

  categoryApi: CategoryService;
  subcategoryApi: SubcategoryService;
  
  constructor(private fb: FormBuilder, categoryService: CategoryService,
    subcategoryService: SubcategoryService) {

    this.categoryApi = categoryService;
    this.subcategoryApi = subcategoryService;
  }

  ngOnInit(): void {
    this.loadCategories();
    this.createCategoryForm();
    this.createSubCategoryForm();    
  }

  loadCategories(): void{    
    this.categoryList$ = this.categoryApi.getCategories();
  }

  createCategoryForm(): void {
    this.categoryForm = new FormGroup({
      CategoryName: new FormControl('', [Validators.required]),
      CategoryDesc: new FormControl(''),
    });
  }

  createSubCategoryForm(): void {
    this.subCategoryForm = new FormGroup({
      CategoryId: new FormControl('', [Validators.required]),
      SubCategoryName: new FormControl('', [Validators.required]),
      SubCategoryDesc: new FormControl('')
    });
  }

  get fc() {
    return this.categoryForm.controls;
  }

  get fcs() {
    return this.subCategoryForm.controls;
  }

  onSubmit(val: string): void {

    if (val !== '' && val === 'Category') {

      this.isCate_submit = true;
      this.category = new Category();
      const categoryModel = Object.assign(this.category, this.categoryForm.value);

      if (this.categoryForm.valid) {
        this.categoryApi.addCategory(categoryModel).subscribe(
          (data: any) => { console.log('Successed'); },
          (error) => { },
          () => { console.log('Completed'); }
        );
      }
    } else {

      this.isCate_sub_submit = true;
      this.subcategory = new SubCategory();
      const subcategoryModel = Object.assign(this.subcategory, this.subCategoryForm.value);

      if (this.subCategoryForm.valid) {
        this.subcategoryApi.addSubCategory(subcategoryModel).then((data: any) => {
          console.log('successed');
        });
      }
    }
  }

  onReset(val: string): void {

    if (val !== '' && val === 'Category') {

      this.categoryForm.reset();
      this.isCate_submit = false;
    } else {

      this.subCategoryForm.reset();
      this.isCate_sub_submit = false;
    }
  }
}
