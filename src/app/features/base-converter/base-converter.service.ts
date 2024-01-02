import { Injectable } from '@angular/core';
// interface
import { BaseInputFormInterface } from '@/app/features/base-converter/base-converter.interface'

@Injectable({
  providedIn: 'root'
})
export class BaseConverterService {

  constructor() { }

  baseConvert(baseNumber: number, targetValue: string): BaseInputFormInterface {
    const decimalValue: number = parseInt(targetValue, baseNumber)

    return {
      binary: decimalValue.toString(2),
      octal: decimalValue.toString(8),
      decimal: decimalValue.toString(10),
      hexadecimal: decimalValue.toString(16).toUpperCase(),
    }
  }
}
