import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {

  public value = new FormControl();

  disabled: boolean;
  @Input() customplaceholder: string;

  onChange: (event) => void;
  onTouched: () => void;

  constructor() {}
  writeValue(value: string): void {
    this.value.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {
    this.value.valueChanges.subscribe((e)=>{
      console.log(e);      
    });
  }

}