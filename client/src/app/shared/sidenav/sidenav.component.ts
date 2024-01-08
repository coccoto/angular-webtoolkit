import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// service
import { SidenavService } from '@src/app/shared/sidenav/sidenav.service'
// interface
import { ApiResponseInterface } from '@src/app/interface/api-response.interface'
import { ViewMenuInterface } from '@src/app/interface/view-menu.interface'

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.sass'
})
export class SidenavComponent {

  menuItems: ViewMenuInterface[] = [];

  constructor(private sidenavService: SidenavService) {
    this.assembleMenu()
  }

  async assembleMenu() {
    const apiResponse: ApiResponseInterface<ViewMenuInterface> = await this.sidenavService.getViewMenu()
    this.menuItems = apiResponse.result
  }
}
