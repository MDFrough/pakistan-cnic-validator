import { NgModule } from '@angular/core';
import { CnicValidatorDirective } from './cnic-validator.directive';
import { CnicMaskDirective } from './cnic-mask.directive';
import { CnicPipe } from './cnic.pipe';

@NgModule({
    declarations: [],
    imports: [
        CnicValidatorDirective,
        CnicMaskDirective,
        CnicPipe
    ],
    exports: [
        CnicValidatorDirective,
        CnicMaskDirective,
        CnicPipe
    ]
})
export class CnicValidatorModule { }
