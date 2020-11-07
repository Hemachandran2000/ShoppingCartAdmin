import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldConfig } from '../../fieldModel/fieldconfig.model';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() { 
    this.control.valueChanges.subscribe((e)=>{
      console.log('Custom control ----- ' + e);
    });
  }

  get control(): AbstractControl{
    return this.group.get(this.field.name);
  }

  get minerror(){
    console.log(this.control.errors);
    return this.control.hasError('minlength');
  }

  get required(){    
    return this.control.hasError('required');
  }
}
