import { Injectable } from '@angular/core';
// core
import { ApiManagerService } from '@/app/core/api-manager.service'
// interface
import { ApiResponseInterface } from '@/app/shared/interface/api-response.interface'
import { ViewMenuInterface } from '@/app/shared/interface/view-menu.interface'

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private apiManagerService: ApiManagerService) { }

  async getViewMenu(): Promise<ApiResponseInterface<ViewMenuInterface>> {
    const response = await this.apiManagerService.post('/api/get/table/view-menu', {})
    const apiResponse: ApiResponseInterface<ViewMenuInterface> = response as ApiResponseInterface<ViewMenuInterface>
    return apiResponse
  }
}
