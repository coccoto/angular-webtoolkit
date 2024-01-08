import { Injectable } from '@angular/core';
// core
import { ApiManagerService } from '@src/app/core/api-manager.service'
// interface
import { ApiResponseInterface } from '@src/app/interface/api-response.interface'
import { ViewMenuInterface } from '@src/app/interface/view-menu.interface'

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private apiManagerService: ApiManagerService) { }

  async getViewMenu(): Promise<ApiResponseInterface<ViewMenuInterface>> {
    const response = await this.apiManagerService.post('api/get/table/view-menu', {})
    return response as ApiResponseInterface<ViewMenuInterface>
  }
}
