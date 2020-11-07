import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FieldConfig } from '../fieldModel/fieldconfig.model';

@Injectable()
export class ControlUtilService {

    fb: FormBuilder;
    constructor(fb: FormBuilder) {
        this.fb = fb;
     }

    createFormGroup(fields: FieldConfig[]) {
        const group: any = this.fb.group({});
        fields.forEach(control => group.addControl(control.name, this.createControl(control)));
        return group;
    }

    createControl(config: FieldConfig) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }
}
