export function isValidCnic(value: string): boolean {
    return /^(\d{5}-\d{7}-\d{1}|\d{13})$/.test(value);
}



export interface ParsedCnic {
    regionCode: string;
    serial: string;
    gender: 'Male' | 'Female' | 'Unknown';
}

export function parseCnic(cnic: string): ParsedCnic | null {
    const cleaned = cnic.replace(/\D/g, '');
    if (cleaned.length !== 13) return null;
    const regionCode = cleaned.slice(0, 5);
    const serial = cleaned.slice(5, 12);
    const lastDigit = parseInt(cleaned.slice(12), 10);
    const gender = isNaN(lastDigit)
        ? 'Unknown'
        : lastDigit % 2 === 0
            ? 'Female'
            : 'Male';
    // ...gender+serial logic
    return { regionCode, serial, gender };
}
