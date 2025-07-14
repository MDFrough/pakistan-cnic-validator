import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[cnicMask]',
    standalone: true
})
export class CnicMaskDirective {
    constructor(private el: ElementRef<HTMLInputElement>) { }

    @HostListener('input', ['$event']) onInput(event: Event): void {
        const input = this.el.nativeElement;
        let digits = input.value.replace(/\D/g, '');

        if (digits.length > 13) digits = digits.slice(0, 13);

        let formatted = digits;
        if (digits.length >= 6 && digits.length <= 12)
            formatted = digits.replace(/^(\d{5})(\d+)/, '$1-$2');
        if (digits.length === 13)
            formatted = digits.replace(/^(\d{5})(\d{7})(\d{1})$/, '$1-$2-$3');

        input.value = formatted;

        // Dispatch input event so Angular form updates
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
