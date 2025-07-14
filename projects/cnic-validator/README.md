# CNIC Validator for Angular

A lightweight and powerful Angular library for validating, formatting, and parsing Pakistani CNIC numbers. Includes input masking, validation, formatting pipe and directive.

## 📦 Features

- ✅ CNIC input validation (13-digit format: `xxxxx-xxxxxxx-x`)
- ✅ CNIC input masking directive (auto-inserts hyphens)
- ✅ CNIC validator directive for template-driven forms
- ✅ Validation errors via Angular Reactive Forms
- ✅ CNIC formatting pipe
- ✅ Built for Angular 17+
- ✅ Supports both NgModules and Standalone Components

---

## 🚀 Installation

```bash
npm install cnic-validator-angular
```

---

## 🔧 Setup

### Option 1: Using NgModules

```ts
import { CnicValidatorModule } from '@mdfrough/cnic-validator';

@NgModule({
  imports: [CnicValidatorModule],
})
export class AppModule {}
```

### Option 2: Using Standalone Components

You can directly import the directive and pipe in standalone components:

```ts
import { CnicMaskDirective } from '@mdfrough/cnic-validator';
import { CnicFormatPipe } from '@mdfrough/cnic-validator';
import { CnicValidatorDirective } from '@mdfrough/cnic-validator';

@Component({
  standalone: true,
  selector: 'app-cnic-form',
  imports: [CnicMaskDirective, CnicFormatPipe, CnicValidatorDirective],
  templateUrl: './cnic-form.component.html'
})
export class CnicFormComponent {}
```

---

## 🧪 Usage

### 1. Masked CNIC Input Field

```html
<input 
  type="text" 
  formControlName="cnic" 
  cnicMask 
  placeholder="xxxxx-xxxxxxx-x" />
```

### 2. Reactive Form Setup

```ts
this.form = this.fb.group({
  cnic: ['', [Validators.required, cnicValidatorFn]]
});
```

### 3. Template-Driven Form Setup

```html
<input 
  name="cnic" 
  ngModel 
  cnicMask 
  cnicValidator 
  #cnicModel="ngModel" />
<div *ngIf="cnicModel.errors?.['invalidCnic']">
  Invalid CNIC format
</div>
```

### 4. Display Validation Error (Reactive)

```html
<div *ngIf="form.get('cnic')?.errors?.['invalidCnic']">
  Invalid CNIC format
</div>
```

### 5. Pipe Usage

```html
{{ '1234512345671' | cnic }} <!-- Outputs: 12345-1234567-1 -->
```

---

## 🔍 API Reference

### Directive: `cnicMask`
- Applies input masking as user types
- Automatically formats input to `xxxxx-xxxxxxx-x`

### Directive: `cnicValidator`
- Use in template-driven forms
- Adds validation for correct CNIC structure

### Validator Function: `cnicValidatorFn`
- Returns Angular `ValidatorFn`
- Use in reactive forms

### Pipe: `cnic`
- Formats raw CNIC into masked format

---

## 🛠 Development Setup

```bash
git clone https://github.com/your-org/cnic-validator-angular.git
cd cnic-validator-angular
npm install
ng build cnic-lib --configuration production
ng serve
```

The demo app will be available at `http://localhost:4200/`.

---

## 📜 License

[MIT](LICENSE)

---

## 🤝 Contributing

PRs welcome! Please follow Angular style guidelines and write tests.

---

## 📣 Credits

This project was built with ❤️ to simplify handling Pakistani CNICs in modern Angular apps.
