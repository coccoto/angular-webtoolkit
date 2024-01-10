import { Component, Input, Renderer2, ElementRef } from '@angular/core';
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

  constructor (
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private appContextService: AppContextService,
  ) { }

  ngOnInit() {
    if (this.appContextService.isPc) {
      this.handleMenuClick()
    }
  }

  handleMenuClick(): void {
    if (this.menu !== undefined) {
      this.menu.toggle()
    }
  }

  handleContrastClick(): void {
    const elemBody = this.elementRef.nativeElement.ownerDocument.body

    if (elemBody.classList.contains('light-theme')) {
      this.renderer2.addClass(elemBody, 'dark-theme')
      this.renderer2.removeClass(elemBody, 'light-theme')

    } else {
      this.renderer2.addClass(elemBody, 'light-theme')
      this.renderer2.removeClass(elemBody, 'dark-theme')
    }
  }
}
