import { Component } from '@angular/core';
// component
import { TextInputFieldComponent } from '@/app/shared/text-input-field/text-input-field.component'
// service
import { BaseConverterService } from '@/app/features/base-converter/base-converter.service'
// interface
import { BaseInputFormInterface, initializeBaseInputForm } from '@/app/features/base-converter/base-converter.interface'
import { TextInputFieldResultInterface } from '@/app/shared/text-input-field/text-input-field.interface'

@Component({
  selector: 'app-base-converter',
  standalone: true,
  imports: [TextInputFieldComponent],
  templateUrl: './base-converter.component.html',
  styleUrl: './base-converter.component.sass'
})
export class BaseConverterComponent {

  baseConverterService: BaseConverterService = new BaseConverterService()
  baseInputForm: BaseInputFormInterface = initializeBaseInputForm()

  baseConvert(targetObject: TextInputFieldResultInterface): void {
    this.baseInputForm = this.baseConverterService.baseConvert(Number(targetObject.elemName), targetObject.inputValue)
  }
}
