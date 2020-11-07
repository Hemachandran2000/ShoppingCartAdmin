import { ValidatorFn } from '@angular/forms';

export class FieldConfig {
    disabled?: boolean;
    label?: string;
    name: string;
    placeholder?: string;
    type: string;
    validation?: ValidatorFn[];
    value?: any;
    errorMsg?: any;
}
