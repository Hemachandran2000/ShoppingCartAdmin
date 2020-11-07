import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductRoutingModule } from './product-routing.module';
import { ListviewComponent } from './listview/listview.component';
import { DetailsComponent } from './details/details.component';
import { CreateProductComponent } from './Create/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateProductComponent,
    ListviewComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
