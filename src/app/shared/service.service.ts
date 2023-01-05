import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  todoObj: Task = {
    id: 0,
    name: '',
    status: false,
  };

  url: string = 'http://localhost:3000/todos';
  constructor() {}

  getApi() {
    return fetch(this.url);
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
    console.log(id);
    return fetch(this.url + '/' + id, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  // check Todo
  checkTodo(taskId: number) {
    console.log(taskId + ' is done');

    fetch(this.url + '/' + taskId, {
      method: 'PATCH',
      body: JSON.stringify({
        status: true,
      }),
      headers: { 'content-Type': 'application/json' },
    });
    if (this.todoObj.status == true) {
      console.log('yes its true');
    }
  }
}
