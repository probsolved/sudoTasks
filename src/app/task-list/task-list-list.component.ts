import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { task } from '../shared/task.model'
import { TaskListListService } from './task-list-list.service';

@Component({
  selector: 'app-task-list-list',
  templateUrl: './task-list-list.component.html',
  styleUrls: ['./task-list-list.component.css']
})
export class TaskListListComponent implements OnInit, OnDestroy {
  tasks: task[];
  private igChangeSub: Subscription;

  constructor(private tlService: TaskListListService) { }

  ngOnInit() {
    this.tasks = this.tlService.gettasks();
    this.igChangeSub = this.tlService.tasksChanged
      .subscribe(
        (tasks: task[]) => {
          this.tasks = tasks;
        }
      );
  }

  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
  }
}
