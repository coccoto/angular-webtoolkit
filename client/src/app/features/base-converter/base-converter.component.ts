import { Component } from '@angular/core';
// component
import { InputFieldComponent } from '@src/app/shared/input-field/input-field.component'
// service
import { BaseConverterService } from '@src/app/features/base-converter/base-converter.service'
// interface
import { BaseInputFormInterface, initializeBaseInputForm } from '@src/app/features/base-converter/base-converter.interface'
import { InputFieldResultInterface } from '@src/app/shared/input-field/input-field.interface'

@Component({
  selector: 'app-base-converter',
  standalone: true,
  imports: [
    // component
    InputFieldComponent
  ],
  templateUrl: './base-converter.component.html',
  styleUrl: './base-converter.component.sass'
})
export class BaseConverterComponent {

  constructor(private baseConverterService: BaseConverterService) { }

  // define baseInputForm
  baseInputForm: BaseInputFormInterface = initializeBaseInputForm()

  baseConvert(targetObject: InputFieldResultInterface): void {
    this.baseInputForm = this.baseConverterService.baseConvert(Number(targetObject.elemName), targetObject.inputValue)
  }
}
