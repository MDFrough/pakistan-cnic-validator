import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnic',
    standalone: true
})
export class CnicPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';

        // remove all non-digits
        const cleaned = value.replace(/\D/g, '').slice(0, 13); // ✅ only keep first 13 digits

        if (cleaned.length < 13) return cleaned;

        return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 12)}-${cleaned.slice(12)}`;
    }
}
