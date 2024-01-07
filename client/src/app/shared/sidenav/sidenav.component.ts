import { Component } from '@angular/core';
// service
import { SidenavService } from '@/app/shared/sidenav/sidenav.service'
// interface
import { ViewMenuInterface } from '@/app/shared/interface/view-menu.interface'

import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.sass'
})
export class SidenavComponent {

  menuItems: ViewMenuInterface[] = [];

  constructor(private sidenavService: SidenavService) {
    this.assembleMenu()
  }

  async assembleMenu() {
    // const apiResponse: ApiResponseInterface<ViewMenuInterface> = await this.sidenavService.getViewMenu()
    
    const test: ViewMenuInterface = {
      system_name: '',
      screen_name: '進数変換',
      origin: '',
      path: '',
    }
    const test2: ViewMenuInterface = {
      system_name: '',
      screen_name: '文字数カウント',
      origin: '',
      path: '',
    }

    // this.menuItems = apiResponse.result
    this.menuItems = [test, test2]
  }
}
