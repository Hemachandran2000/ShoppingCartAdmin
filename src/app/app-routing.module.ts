import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch:'full' },
  { path: 'admin', loadChildren: ()=> import('./features/feature.module').then(m=> m.FeatureModule) },
  { path: 'shared', loadChildren: ()=> import('./shared/shared.module').then(m=> m.SharedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
