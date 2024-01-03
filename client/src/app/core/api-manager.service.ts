import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  private origin: string = 'https://localhost:3200'

  constructor(private http: HttpClient) { }

  get(endpoint: string, headers: HttpHeaders): Observable<any> {
    return this.http.get(this.origin + endpoint, { headers })
  }

  post(endpoint: string, data: any, headers: HttpHeaders): Observable<any> {
    return this.http.post(this.origin + endpoint, data, { headers })
  }

  put(endpoint: string, data: any, headers: HttpHeaders): Observable<any> {
    return this.http.put(this.origin + endpoint, data, { headers })
  }

  delete(endpoint: string, headers: HttpHeaders): Observable<any> {
    return this.http.delete(this.origin + endpoint, { headers })
  }
}