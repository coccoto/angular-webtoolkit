import { Component, Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'
// interface
import { InputFieldResultInterface } from '@/app/shared/input-field/input-field.interface'
// Angular Material
import {FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.sass'
})
export class InputFieldComponent {

  @Input() elemName: string = ''
  @Input() inputValue: string = '';
  @Input() label: string = ''
  @Input() placeholder: string = ''

  @Output() inputEvent = new EventEmitter<InputFieldResultInterface>()

  handleInput(): void {
    const result: InputFieldResultInterface = {
      elemName: this.elemName,
      inputValue: this.inputValue,
    }
    this.inputEvent.emit(result)
  }
}
