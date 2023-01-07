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
  task: any;
  doneTodos: any;
  filteredTasks: any;

  constructor() {}

  // Submit Todos
  submitTodo(todo: string) {
    this.ServiceService.submitTodo(todo);
    this.emptyInput = ' ';
    this.showTodo();
  }

  // Show Todos
  showTodo() {
    this.ServiceService.getApi().then((data) => {
      const filteredData = data.filter(function (data: any) {
        return data.status == false;
      });
      this.tasks = filteredData;
    });
  }

  // Delete Todos
  delRequest(id: number) {
    this.ServiceService.delRequest(id);
    this.showTodo();
  }

  // Check todo
  checkTodo(taskId: number) {
    this.ServiceService.checkTodo(taskId);
    this.showTodo();
    console.log('Task ' + taskId + ' is clicked');
    // this.displayTodo = !this.displayTodo;
  }

  // ngoninit is a lifecycle hook
  // it is called when the component is initialized
  ngOnInit(): void {
    this.showTodo();
  }
}
