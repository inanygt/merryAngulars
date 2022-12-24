import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: string = 'http://localhost:3000/todos';
  constructor() {}

  getTodoList() {
    return fetch(this.url).then((res) => res.json());
  }
}
