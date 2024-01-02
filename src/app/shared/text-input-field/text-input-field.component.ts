import { Component, Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core'
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
  @Input() label: string = ''
  @Input() placeholder: string = ''

  @Output() inputEvent = new EventEmitter<{elemName: String, value: String}>()

  inputValue: string = '';

  handleInput() {
    const result = {
      elemName: this.elemName,
      value: this.inputValue,
    }
    this.inputEvent.emit(result)
  }
}
