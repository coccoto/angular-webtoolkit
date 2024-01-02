import { Component } from '@angular/core';
// Angular Material
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-baseconverter',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './baseconverter.component.html',
  styleUrl: './baseconverter.component.sass'
})
export class BaseconverterComponent {
  baseNumber: string = '';

  onInput() {
    console.log(this.baseNumber)
  }

}
