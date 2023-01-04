import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: string = 'http://localhost:3000/todos';
  constructor() {}

  getApi() {
    return fetch(this.url);
  }
}
