import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent implements OnInit {
  ServiceService = new ServiceService();
  todo: string = '';
  constructor() {}
  getTodo() {
    console.log(this.todo);
    this.todo = '';
  }

  // ngoninit is a lifecycle hook
  // it is called when the component is initialized
  ngOnInit(): void {
    this.ServiceService.getTodoList().then((data) => {
      console.log(data);
    });
  }
}
