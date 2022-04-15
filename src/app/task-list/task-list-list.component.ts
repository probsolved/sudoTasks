import { Component, OnInit } from '@angular/core';
import { task } from '../shared/task.model'
import { TaskListListService } from './task-list-list.service';

@Component({
  selector: 'app-task-list-list',
  templateUrl: './task-list-list.component.html',
  styleUrls: ['./task-list-list.component.css']
})
export class TaskListListComponent implements OnInit {
  tasks: task[];

  constructor(private tlService: TaskListListService) { }

  ngOnInit() {
    this.tasks = this.tlService.gettasks();
    this.tlService.tasksChanged
      .subscribe(
        (tasks: task[]) => {
          this.tasks = tasks;
        }
      );
  }

}
