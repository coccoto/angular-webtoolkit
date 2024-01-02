import { Component } from '@angular/core';
// Angular Material
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-base-converter',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './base-converter.component.html',
  styleUrl: './base-converter.component.sass'
})
export class BaseConverterComponent {
  baseNumber: string = '';

  onInput() {
    console.log(this.baseNumber)
  }

}
