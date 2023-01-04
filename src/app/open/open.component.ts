import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent implements OnInit {
  ServiceService = new ServiceService();
  url: string = 'http://localhost:3000/todos';

  emptyInput!: string;

  todoObj: Task = {
    id: 0,
    name: '',
    status: false,
  };

  tasks: any;

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
    this.showTodo();
    this.emptyInput = '';
  }

  constructor() {}
  showTodo() {
    this.ServiceService.getApi()
      .then((res) => res.json())
      .then((data) => {
        this.tasks = data;
      });
  }

  delRequest(id: number) {
    console.log(id);
    return fetch(this.url + '/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        this.showTodo();
        console.log(data);
      });

    // .then(this.showTodo())
    // .catch();
  }

  // ngoninit is a lifecycle hook
  // it is called when the component is initialized
  ngOnInit(): void {
    this.showTodo();
  }
}

// return fetch(this.url + '/' + id, {
//   method: 'DELETE',
// })
//   .then((res) => res.json())
//   .then(this.showTodo())
//   .catch();
