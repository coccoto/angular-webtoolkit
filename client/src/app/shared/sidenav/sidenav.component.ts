import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// service
import { SidenavService } from '@/app/shared/sidenav/sidenav.service'
// interface
import { ApiResponseInterface } from '@/app/shared/interface/api-response.interface'
import { ViewMenuInterface } from '@/app/shared/interface/view-menu.interface'

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
