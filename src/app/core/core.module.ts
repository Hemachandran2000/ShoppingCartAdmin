import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { 
  CategoryService,
  SubcategoryService  
} from '../core/services/index';
import { FacadeService } from '../core/services/facadeapi.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    CategoryService,
    SubcategoryService,
    FacadeService
  ]
})
export class CoreModule { }
