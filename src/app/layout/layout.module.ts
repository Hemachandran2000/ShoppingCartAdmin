import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MetismenuAngularModule } from '@metismenu/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MetismenuAngularModule
  ],
  exports:[
    HeaderComponent    
  ]
})
export class LayoutModule {}
