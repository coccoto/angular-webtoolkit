import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppContextService {

  isPc: boolean = false

  constructor() { }
}
