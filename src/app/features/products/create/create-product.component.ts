import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;  
  isSubmitted: boolean = false;

  categoryList: string[] = [
    "Milk & Dairy",
    "Grocery",
    "Vagetables"
  ];

  subCategoryList: string[] = [
    "Rice",
    "Milk",
    "Potato",
    "Snacks"
  ];

  productQtyMeasure: string[] =[
    "Litre",
    "KG"
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm(): void{
    this.productForm = new FormGroup({
      cate_name: new FormControl('', [Validators.required]),     
      sub_cate_name: new FormControl('', [Validators.required]),     
      prod_name: new FormControl('', [Validators.required]),
      prod_feature: new FormControl(''),
      prod_qty: new FormControl('', [Validators.required]),
      prod_original_rate: new FormControl('', [Validators.required]),
      prod_rate: new FormControl('', [Validators.required]),
      prod_qty_measure: new FormControl('', [Validators.required]),
      prod_size: new FormControl('', [Validators.required]),
      prod_desc: new FormControl('')
    });
  } 

  get f(){
    return this.productForm.controls;
  }

  onChangeCategory(event): void{
    this.productForm.controls['cate_name'].setValue(event.target.value,{ onlySelf:true});
  }

  onChangeSubCategory(event): void{
    this.productForm.controls['sub_cate_name'].setValue(event.target.value,{ onlySelf:true});
  }

  onChangeProdMeasure(event): void{
    this.productForm.controls['prod_qty_measure'].setValue(event.target.value,{ onlySelf:true});
  }

  submit(): void{
    console.log(this.productForm.value);
    this.isSubmitted = true;
  }

  reset(): void{
    this.productForm.reset();
    this.isSubmitted = false;
  }

}
