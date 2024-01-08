import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
// environment
import { environment } from '@src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  private origin: string = environment.apiOrigin

  constructor(private http: HttpClient) { }

  get(endpoint: string): Promise<any> {
    const response = this.http.get(this.origin + endpoint)
    return firstValueFrom(response)
  }

  post(endpoint: string, data: any): Promise<any> {
    const response = this.http.post(this.origin + endpoint, data)
    return firstValueFrom(response)
  }

  put(endpoint: string, data: any): Promise<any> {
    const response = this.http.put(this.origin + endpoint, data)
    return firstValueFrom(response)
  }

  delete(endpoint: string): Promise<any> {
    const response = this.http.delete(this.origin + endpoint)
    return firstValueFrom(response)
  }
}