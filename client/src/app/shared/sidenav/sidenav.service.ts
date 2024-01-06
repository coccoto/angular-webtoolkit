import { Injectable } from '@angular/core';
// core
import { ApiManagerService } from '@/app/core/api-manager.service'
// interface
import { ViewMenuInterface } from '@/app/shared/interface/view-menu.interface';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private apiManagerService: ApiManagerService) {
    this.getViewMenu()
  }

  async getViewMenu(): Promise<ViewMenuInterface> {
    const result = await this.apiManagerService.post('/api/get/table/view-menu', {})
    const viewMenu: ViewMenuInterface = result as ViewMenuInterface
    return viewMenu
  }
}
