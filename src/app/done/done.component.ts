import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
})
export class DoneComponent implements OnInit {
  ServiceService = new ServiceService();
  tasks: any;

  showTodo() {
    this.ServiceService.getApi().then((data) => {
      const doneTasks = data.filter((data: any) => {
        return data.status == true;
      });
      this.tasks = doneTasks;
      // Filtering todos that are done
    });
  }

  // Delete Todos
  delTask(id: number) {
    this.ServiceService.delTasks(id);
    this.showTodo();
  }

  ngOnInit(): void {
    this.showTodo();
  }
}
