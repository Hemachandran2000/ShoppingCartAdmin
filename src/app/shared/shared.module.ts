import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ControlUtilService } from '../shared/helpers/controlutil.service';
import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { DynamicFieldDirective } from './components/dynamicControls/dynamic-controls.directive';
import { TextboxComponent } from './components/dynamicControls/textbox.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    DynamicformComponent,
    DynamicFieldDirective,
    TextboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports:[    
    DynamicformComponent
  ],
  providers: [ControlUtilService],
  entryComponents: [TextboxComponent]
})
export class SharedModule { }
