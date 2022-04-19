import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { task } from 'src/app/shared/task.model';
import { TaskListListService } from '../task-list-list.service';
import { NgForm, FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list-edit',
  templateUrl: './task-list-edit.component.html',
  styleUrls: ['./task-list-edit.component.css']
})
export class TaskListEditComponent implements OnInit, OnDestroy {
  @ViewChild ('f') tlForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedTaskIndex: number;
  editedTask: task;

  constructor(private tlService: TaskListListService) { }

  ngOnInit(): void {
    this.subscription = this.tlService.startedEditing.subscribe(
      (index:number) => {
        this.editedTaskIndex = index;
        this.editMode = true;
        this.editedTask = this.tlService.getTask(index);
        this.tlForm.setValue({
          name: this.editedTask.name,
          priority: this.editedTask.priority
        })

      }
    );

  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newtask = new task(value.name, value.priority);
    this.tlService.addtask(newtask);
  }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
