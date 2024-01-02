import { Component } from '@angular/core';
// component
import { TextInputFieldComponent } from '@/app/shared/text-input-field/text-input-field.component';

@Component({
  selector: 'app-base-converter',
  standalone: true,
  imports: [TextInputFieldComponent],
  templateUrl: './base-converter.component.html',
  styleUrl: './base-converter.component.sass'
})
export class BaseConverterComponent {
  
  baseConvert(resultInput: {elemName: String, value: String}) {
    console.log(resultInput)
  }
}
