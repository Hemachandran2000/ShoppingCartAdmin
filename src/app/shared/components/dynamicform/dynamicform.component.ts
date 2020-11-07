import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AbstractControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { valHooks } from 'jquery';

import { FieldConfig } from '../../fieldModel/fieldconfig.model';
import { ControlUtilService } from '../../helpers/controlutil.service';

@Component({
  exportAs: 'appDynamic',
  selector: 'app-dynamic',
  templateUrl: './dynamicform.component.html',
  styles: []
})
export class DynamicformComponent implements OnInit, AfterViewInit {

  fields: FieldConfig[];
  form: FormGroup;
  payLoad = '';

  constructor(private utilService: ControlUtilService) { }

  get control(): AbstractControl {
    return this.form.get('name');
  }

  ngAfterViewInit(): void {
    this.form.get('name').valueChanges.subscribe((e) => {
      console.log('Parent control---' + e);
    });

    setTimeout(() => {
      this.form.get('name').setValidators(this.control.validator ? [
        this.control.validator,
        Validators.minLength(3),
        Validators.maxLength(10)
      ] : [
          Validators.minLength(3),
          Validators.maxLength(10)
        ]);
      this.form.get('name').updateValueAndValidity({emitEvent: false});

      this.form.get('name').markAsDirty();
      this.form.get('name').setErrors({ required: true });      
    }, 2000);
  }

  ngOnInit() {
    this.fields = [
      {
        type: "text",
        label: "Username",
        name: "name",
        placeholder: "Enter User name",
        validation: [Validators.required]
      }];
    //console.log(this.fields);
    this.form = this.utilService.createFormGroup(this.fields);
  }



  onSubmit() {
    if (this.form.invalid)
      return;

    console.log(this.form.value);
    this.payLoad = JSON.stringify(this.form.value);
  }
}
