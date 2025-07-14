import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[cnicValidator]',
    standalone: true,
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CnicValidatorDirective,
        multi: true
    }]
})
export class CnicValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value || /^(\d{5}-\d{7}-\d{1}|\d{13})$/.test(value)) {
            return null;
        }
        return { invalidCnic: true };
    }
}
