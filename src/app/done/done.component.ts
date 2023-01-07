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
      this.tasks = data;
    });
  }

  ngOnInit(): void {
    this.showTodo();
  }
}
