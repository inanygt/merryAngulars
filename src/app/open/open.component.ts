import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent implements OnInit {
  ServiceService = new ServiceService();
  emptyInput!: string;
  tasks: any;
  doneTodos: any;

  // faCoffee = faCoffee;
  faPlus = faPlus;

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
      // Filtering the done tasks
      const doneTasks = data.filter((data: any) => {
        return data.status == false;
      });
      this.tasks = doneTasks;
    });
  }

  // Delete Todos
  delTask(id: number) {
    this.ServiceService.delTasks(id);
    this.showTodo();
  }

  // Check todo
  checkTodo(taskId: number) {
    this.ServiceService.checkTodo(taskId);
    this.showTodo();
  }

  ngOnInit(): void {
    this.showTodo();
  }
}
