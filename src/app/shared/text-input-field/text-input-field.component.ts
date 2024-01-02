import { Component, Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'
// interface
import { TextInputFieldResultInterface } from '@/app/shared/text-input-field/text-input-field.interface'
// Angular Material
import {FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-text-input-field',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './text-input-field.component.html',
  styleUrl: './text-input-field.component.sass'
})
export class TextInputFieldComponent {

  @Input() elemName: string = ''
  @Input() inputValue: string = '';
  @Input() label: string = ''
  @Input() placeholder: string = ''

  @Output() inputEvent = new EventEmitter<TextInputFieldResultInterface>()

  handleInput(): void {
    const result: TextInputFieldResultInterface = {
      elemName: this.elemName,
      inputValue: this.inputValue,
    }
    this.inputEvent.emit(result)
  }
}
