import { Component, Input } from '@angular/core';
// @angular/material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    // @angular/material
    MatToolbarModule,
    MatIconModule,
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
