import { Component, ViewChild, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
// component
import { HeaderComponent } from '@src/app/shared/header/header.component'
import { SidenavComponent } from '@src/app/shared/sidenav/sidenav.component'
import { BaseConverterComponent } from '@src/app/features/base-converter/base-converter.component'
// context
import { AppContextService } from '@src/app/app.context.service'
// utils
import { isPc } from '@src/app/assets/scripts/utils/commonFunction'
// @angular/material
import { MatSidenav, MatSidenavModule, MatDrawerMode } from '@angular/material/sidenav'

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
    // @angular/material
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  @ViewChild('menu') menu: MatSidenav | undefined

  menuMode: MatDrawerMode = 'over'

  constructor (private appContextService: AppContextService) { }

  ngOnInit() {
    this.checkResponsive()
    this.menuMode = this.appContextService.isPc ? 'side' : 'over'
  }

  @HostListener('window:resize', ['$event'])
  handleResize(event: Event) {
    this.checkResponsive()
    this.menuMode = this.appContextService.isPc ? 'side' : 'over'
  }

  checkResponsive() {
    this.appContextService.isPc = isPc()
  }
}
