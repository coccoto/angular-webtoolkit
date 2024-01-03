import { Component, Input } from '@angular/core';
// Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
// Angular Material
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  @Input() sidenav: MatSidenav | undefined;

  handleMenuClick(): void {
    if (this.sidenav !== undefined) {
      this.sidenav.toggle()
    }
  }
}
