import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';

const routes: Routes = [
    { path: '', component: DynamicformComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
