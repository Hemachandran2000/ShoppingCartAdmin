import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './categories/create/category.component';
import { ListviewComponent } from './categories/listview/listview.component';

const routes: Routes = [
    { path: '', component: ListviewComponent, pathMatch:'full' },
    { path: 'category', component: CategoryComponent },
    { path: 'categorylist', component: ListviewComponent },    
    { path: 'product', loadChildren: ()=> import('./products/product.module').then(m=> m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
