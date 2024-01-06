import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  private origin: string = 'http://localhost:3200'

  constructor(private http: HttpClient) { }

  get(endpoint: string): Promise<any> {
    const result = this.http.get(this.origin + endpoint)
    return firstValueFrom(result)
  }

  post(endpoint: string, data: any): Promise<any> {
    const result = this.http.post(this.origin + endpoint, data)
    return firstValueFrom(result)
  }

  put(endpoint: string, data: any): Promise<any> {
    const result = this.http.put(this.origin + endpoint, data)
    return firstValueFrom(result)
  }

  delete(endpoint: string): Promise<any> {
    const result = this.http.delete(this.origin + endpoint)
    return firstValueFrom(result)
  }
}