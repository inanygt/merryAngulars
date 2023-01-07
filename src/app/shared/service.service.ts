import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: string = 'http://localhost:3000/todos';

  todoObj: Task = {
    id: 0,
    name: '',
    status: false,
  };

  constructor() {}

  // Fething api
  getApi() {
    return fetch(this.url).then((res) => res.json());
  }

  // Submit Todo
  submitTodo(todo: string) {
    this.todoObj = {
      id: 0,
      name: todo,
      status: false,
    };

    fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(this.todoObj),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Delete Todo
  delRequest(id: number) {
    return fetch(this.url + '/' + id, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  // check Todo
  checkTodo(taskId: number) {
    fetch(this.url + '/' + taskId, {
      method: 'PATCH',
      body: JSON.stringify({
        status: true,
      }),
      headers: { 'content-Type': 'application/json' },
    });
  }
}
