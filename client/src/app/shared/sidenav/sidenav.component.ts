import { Component } from '@angular/core';
// service
import { SidenavService } from '@/app/shared/sidenav/sidenav.service'

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.sass'
})
export class SidenavComponent {

  constructor(private sidenavService: SidenavService) {
    this.assembleMenu()
  }

  async assembleMenu() {
    await console.log(await this.sidenavService.getViewMenu())
  }
}
