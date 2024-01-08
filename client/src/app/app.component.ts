import { Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
// component
import { HeaderComponent } from '@src/app/shared/header/header.component'
import { SidenavComponent } from '@src/app/shared/sidenav/sidenav.component'
import { BaseConverterComponent } from '@src/app/features/base-converter/base-converter.component'
// @angular/material
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'

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
}
