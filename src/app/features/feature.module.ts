import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { FeatureRoutingModule } from './feature-routing.module';
import { CategoryComponent } from './categories/create/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductModule } from './products/product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListviewComponent } from './categories/listview/listview.component';
import { CustomInputComponent } from './sample/sample.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CategoryComponent, 
    DashboardComponent, ListviewComponent, CustomInputComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FeatureRoutingModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule    
  ]
})
export class FeatureModule { }
