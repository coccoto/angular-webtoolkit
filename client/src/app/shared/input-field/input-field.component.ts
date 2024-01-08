import { Component, Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms'
// interface
import { InputFieldResultInterface } from '@src/app/shared/input-field/input-field.interface'
// @angular/material
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    FormsModule,
    // @angular/material
    MatInputModule,
  ],
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
