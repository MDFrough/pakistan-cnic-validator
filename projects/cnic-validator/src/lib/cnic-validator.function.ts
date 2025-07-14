// cnic-validator-function.ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cnicValidatorFn(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const cnicRegex = /^(\d{5}-\d{7}-\d{1}|\d{13})$/;

    if (!value || cnicRegex.test(value)) {
        return null;
    }

    return { invalidCnic: true };
}
