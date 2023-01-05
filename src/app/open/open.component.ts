import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent implements OnInit {
  ServiceService = new ServiceService();
  emptyInput!: string;
  tasks: any;

  submitTodo(todo: string) {
    this.ServiceService.submitTodo(todo);
    this.showTodo();
    this.emptyInput = ' ';
  }

  checkTodo(taskId: number) {
    this.ServiceService.checkTodo(taskId);
    this.showTodo();
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
    this.ServiceService.delRequest(id);
    this.showTodo();
  }

  // ngoninit is a lifecycle hook
  // it is called when the component is initialized
  ngOnInit(): void {
    this.showTodo();
  }
}
