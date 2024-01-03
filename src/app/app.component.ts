import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// component
import { HeaderComponent } from '@/app/shared/header/header.component';
import { SidenavComponent } from '@/app/shared/sidenav/sidenav.component';
import { BaseConverterComponent } from '@/app/features/base-converter/base-converter.component';
// Angular Material
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // component
    HeaderComponent,
    SidenavComponent,
    BaseConverterComponent,
    // Angular Material
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'webtoolkit';

  @ViewChild('sidenav') private sidenav: MatSidenav | undefined;

  toggleSidenav(): void {
    if (this.sidenav !== undefined) {
      this.sidenav.toggle()
    }
  }
}
