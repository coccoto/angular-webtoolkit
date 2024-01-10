import { Component, Input } from '@angular/core';
// context
import { AppContextService } from '@src/app/app.context.service'
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
  @Input() menu: MatSidenav | undefined

  constructor (private appContextService: AppContextService) { }

  ngOnInit() {
    if (this.menu !== undefined && this.appContextService.isPc) {
      this.menu.toggle()
    }
  }

  handleMenuClick(): void {
    if (this.menu !== undefined) {
      this.menu.toggle()
    }
  }
}
