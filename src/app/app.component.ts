import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// component
import { HeaderComponent } from '@/app/shared/header/header.component';
import { BaseConverterComponent } from '@/app/features/base-converter/base-converter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // component
    HeaderComponent,
    BaseConverterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'webtoolkit';
}
