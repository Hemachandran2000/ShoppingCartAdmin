import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListviewComponent } from './listview/listview.component';
import { DetailsComponent } from './details/details.component';
import { CreateProductComponent } from './Create/create-product.component';

const routes: Routes = [ 
  { path: '', component: ListviewComponent, pathMatch:'full' },
  { path: 'list', component: ListviewComponent},
  { path: 'create', component: CreateProductComponent},
  { path: 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
